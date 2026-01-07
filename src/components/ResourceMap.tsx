import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import type { CommunityResource } from '@/data/communityResourcesData';

interface ResourceMapProps {
  resources: CommunityResource[];
  getCategoryColor: (category: string) => string;
}

// Connecticut town coordinates - for resources with addresses
const townCoordinates: Record<string, [number, number]> = {
  'Stamford': [-73.5387, 41.0534],
  'Greenwich': [-73.6285, 41.0262],
  'Norwalk': [-73.4080, 41.1176],
  'Darien': [-73.4687, 41.0787],
  'New Canaan': [-73.4948, 41.1468],
  'Bridgeport': [-73.1952, 41.1792],
  'New Haven': [-72.9279, 41.3081],
  'Cos Cob': [-73.5987, 41.0340],
  'Wallingford': [-72.8231, 41.4571],
  'Hartford': [-72.6734, 41.7637],
};

// Color palette for towns (using HSL values from design system)
const townColors = [
  '#386A8E', // primary - deep blue
  '#4CA9C4', // secondary - light blue
  '#7464A2', // accent - purple
  '#3E5A97', // blue-accent
  '#2D5A4A', // green variant
  '#8B5A3C', // warm brown
  '#5A6B8A', // slate blue
  '#6B5A7A', // muted purple
];

// Extract town from address
const getTownFromAddress = (address?: string): string | null => {
  if (!address) return null;
  
  for (const town of Object.keys(townCoordinates)) {
    if (address.toLowerCase().includes(town.toLowerCase())) {
      return town;
    }
  }
  return null;
};

// Get consistent color for a town
const getTownColor = (town: string): string => {
  const towns = Object.keys(townCoordinates);
  const index = towns.indexOf(town);
  return townColors[index % townColors.length];
};

const ResourceMap: React.FC<ResourceMapProps> = ({ resources, getCategoryColor }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  // Filter resources that have CT addresses
  const mappableResources = resources.filter(r => r.address && getTownFromAddress(r.address));

  // Group resources by town for legend
  const resourcesByTown = mappableResources.reduce((acc, resource) => {
    const town = getTownFromAddress(resource.address);
    if (town) {
      if (!acc[town]) acc[town] = [];
      acc[town].push(resource);
    }
    return acc;
  }, {} as Record<string, CommunityResource[]>);

  // Fetch Mapbox token from edge function
  useEffect(() => {
    const fetchToken = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.functions.invoke('get-mapbox-token');
        
        if (error) {
          console.error('Error fetching Mapbox token:', error);
          setError('Unable to load map configuration');
          return;
        }
        
        if (data?.token) {
          setMapboxToken(data.token);
        } else {
          setError('Map configuration not available');
        }
      } catch (err) {
        console.error('Error fetching Mapbox token:', err);
        setError('Unable to load map');
      } finally {
        setIsLoading(false);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || isMapInitialized) return;

    try {
      mapboxgl.accessToken = mapboxToken;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: {
          version: 8,
          sources: {
            'mapbox-streets': {
              type: 'vector',
              url: 'mapbox://mapbox.mapbox-streets-v8'
            }
          },
          layers: [
            {
              id: 'background',
              type: 'background',
              paint: {
                'background-color': 'hsl(210, 20%, 96%)'
              }
            },
            {
              id: 'water',
              type: 'fill',
              source: 'mapbox-streets',
              'source-layer': 'water',
              paint: {
                'fill-color': 'hsl(194, 48%, 85%)'
              }
            },
            {
              id: 'land',
              type: 'fill',
              source: 'mapbox-streets',
              'source-layer': 'landuse',
              paint: {
                'fill-color': 'hsl(0, 0%, 98%)'
              }
            },
            {
              id: 'admin-state',
              type: 'line',
              source: 'mapbox-streets',
              'source-layer': 'admin',
              filter: ['==', ['get', 'admin_level'], 4],
              paint: {
                'line-color': 'hsl(203, 43%, 60%)',
                'line-width': 1.5,
                'line-opacity': 0.6
              }
            },
            {
              id: 'admin-county',
              type: 'line',
              source: 'mapbox-streets',
              'source-layer': 'admin',
              filter: ['==', ['get', 'admin_level'], 6],
              paint: {
                'line-color': 'hsl(203, 43%, 75%)',
                'line-width': 0.75,
                'line-opacity': 0.4
              }
            }
          ]
        },
        center: [-73.2, 41.2],
        zoom: 9.5,
        minZoom: 8,
        maxZoom: 14,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl({ showCompass: false }),
        'top-right'
      );

      map.current.scrollZoom.disable();

      map.current.on('load', () => {
        // Add markers for each resource
        mappableResources.forEach((resource) => {
          const town = getTownFromAddress(resource.address);
          if (!town || !townCoordinates[town]) return;

          const coords = townCoordinates[town];
          // Add small random offset to prevent overlapping
          const offset = [
            (Math.random() - 0.5) * 0.015,
            (Math.random() - 0.5) * 0.015
          ];

          const el = document.createElement('div');
          el.className = 'resource-marker';
          el.style.width = '24px';
          el.style.height = '24px';
          el.style.borderRadius = '50%';
          el.style.backgroundColor = getTownColor(town);
          el.style.border = '3px solid white';
          el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';
          el.style.cursor = 'pointer';
          el.style.transition = 'transform 0.2s ease';

          el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.3)';
          });
          el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
          });

          const marker = new mapboxgl.Marker({ element: el })
            .setLngLat([coords[0] + offset[0], coords[1] + offset[1]])
            .addTo(map.current!);

          // Create popup content
          const popupContent = `
            <div style="max-width: 280px; font-family: system-ui, sans-serif;">
              <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: hsl(208, 43%, 25%);">
                ${resource.name}
              </h3>
              <p style="margin: 0 0 8px 0; font-size: 12px; color: hsl(208, 25%, 55%); line-height: 1.4;">
                ${resource.description.slice(0, 150)}${resource.description.length > 150 ? '...' : ''}
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px;">
                ${resource.resourceTypes.slice(0, 3).map(type => 
                  `<span style="background: hsl(210, 20%, 96%); padding: 2px 8px; border-radius: 9999px; font-size: 11px; color: hsl(208, 25%, 45%);">${type}</span>`
                ).join('')}
              </div>
              ${resource.phone ? `
                <a href="tel:${resource.phone.replace(/[^0-9]/g, '')}" style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: hsl(203, 43%, 39%); text-decoration: none; margin-bottom: 4px;">
                  📞 ${resource.phone}
                </a>
              ` : ''}
              ${resource.address ? `
                <p style="font-size: 11px; color: hsl(208, 25%, 55%); margin: 0 0 8px 0;">
                  📍 ${resource.address}
                </p>
              ` : ''}
              <a href="${resource.url}" target="_blank" rel="noopener noreferrer" 
                style="display: inline-flex; align-items: center; gap: 4px; background: hsl(203, 43%, 39%); color: white; padding: 6px 12px; border-radius: 6px; font-size: 12px; text-decoration: none;">
                Visit Website →
              </a>
            </div>
          `;

          const popup = new mapboxgl.Popup({
            offset: 15,
            closeButton: true,
            closeOnClick: false,
            maxWidth: '300px'
          }).setHTML(popupContent);

          marker.setPopup(popup);

          el.addEventListener('click', () => {
            if (popupRef.current) {
              popupRef.current.remove();
            }
            marker.togglePopup();
            popupRef.current = popup;
          });
        });

        setIsMapInitialized(true);
      });

    } catch (error) {
      console.error('Map initialization error:', error);
      setError('Failed to initialize map');
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      setIsMapInitialized(false);
    };
  }, [mapboxToken, mappableResources]);

  if (isLoading) {
    return (
      <Card className="mb-8 overflow-hidden">
        <div className="h-[400px] w-full flex items-center justify-center bg-muted/50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-3"></div>
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      </Card>
    );
  }

  if (error || !mapboxToken) {
    return (
      <Card className="mb-8 overflow-hidden">
        <div className="h-[400px] w-full flex items-center justify-center bg-muted/50">
          <p className="text-sm text-muted-foreground">{error || 'Map unavailable'}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="mb-8 overflow-hidden">
      <div className="relative">
        <div ref={mapContainer} className="h-[400px] w-full" />
        
        {/* Town Legend */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[200px] max-h-[200px] overflow-y-auto">
          <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Towns</h4>
          <div className="space-y-1.5">
            {Object.entries(resourcesByTown).map(([town, townResources]) => (
              <div key={town} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0 border border-white shadow-sm"
                  style={{ backgroundColor: getTownColor(town) }}
                />
                <span className="text-xs text-muted-foreground">
                  {town} ({townResources.length})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Resource count badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
          <span className="text-sm font-medium text-foreground">
            {mappableResources.length} locations in Connecticut
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ResourceMap;
