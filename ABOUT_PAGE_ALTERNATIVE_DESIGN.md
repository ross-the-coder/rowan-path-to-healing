# Alternative Design for "Story of The Rowan Center" Timeline

## Current Implementation (Accordion-based)
- Uses Accordion components with cards
- Timeline circles on the left, cards on the right
- No connecting line between timeline items
- Each item is collapsible independently

## Alternative Design Approach

Here's how I would structure it with a proper vertical timeline:

```tsx
{/* Story Section with Enhanced Timeline */}
<section className="mb-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-foreground mb-4 font-seasons">The Story of The Rowan Center</h2>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
      For 46 years, The Rowan Center has been a beacon of hope and healing in our community, 
      dedicated to preventing sexual violence and supporting survivors on their path to recovery.
    </p>
  </div>

  {/* Vertical Timeline with Connecting Line */}
  <div className="max-w-5xl mx-auto">
    <div className="relative">
      {/* Vertical Timeline Line - spans entire height */}
      <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
      
      {/* Timeline Items */}
      <div className="space-y-12">
        {/* Timeline Item 1 - 1978 */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Timeline Circle */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
            <span className="text-primary font-bold text-lg">1978</span>
          </div>
          
          {/* Content Card - Left Side */}
          <div className="md:w-1/2 md:pr-12 md:text-right ml-24 md:ml-0">
            <Card className="border-primary/30 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Founding Year</CardTitle>
                <CardDescription className="text-sm">The Beginning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  [Placeholder - Add content about the founding of The Rowan Center in 1978, 
                  the initial services provided, and the founding members' vision.]
                </p>
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <p className="text-muted-foreground/70 text-xs">Historical Photo Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Spacer for right side on desktop */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>

        {/* Timeline Item 2 - 1990s */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Timeline Circle */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
            <span className="text-secondary font-bold text-lg">1990s</span>
          </div>
          
          {/* Spacer for left side on desktop */}
          <div className="hidden md:block md:w-1/2"></div>
          
          {/* Content Card - Right Side */}
          <div className="md:w-1/2 md:pl-12 md:text-left ml-24 md:ml-0">
            <Card className="border-secondary/30 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Expansion Era</CardTitle>
                <CardDescription className="text-sm">Growing Our Reach</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  [Placeholder - Add content about key milestones in the 1990s, program expansions, 
                  or significant community partnerships established during this period.]
                </p>
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <p className="text-muted-foreground/70 text-xs">Historical Photo Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline Item 3 - 2000s */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Timeline Circle */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
            <span className="text-accent font-bold text-lg">2000s</span>
          </div>
          
          {/* Content Card - Left Side */}
          <div className="md:w-1/2 md:pr-12 md:text-right ml-24 md:ml-0">
            <Card className="border-accent/30 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Innovation & Growth</CardTitle>
                <CardDescription className="text-sm">New Horizons</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  [Placeholder - Add content about new programs launched, technological advancements, 
                  or expanded services during the 2000s.]
                </p>
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <p className="text-muted-foreground/70 text-xs">Historical Photo Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Spacer for right side on desktop */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>

        {/* Timeline Item 4 - 2010s */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Timeline Circle */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
            <span className="text-primary font-bold text-lg">2010s</span>
          </div>
          
          {/* Spacer for left side on desktop */}
          <div className="hidden md:block md:w-1/2"></div>
          
          {/* Content Card - Right Side */}
          <div className="md:w-1/2 md:pl-12 md:text-left ml-24 md:ml-0">
            <Card className="border-primary/30 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Modern Era</CardTitle>
                <CardDescription className="text-sm">Transforming Care</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  [Placeholder - Add content about recent developments, new initiatives, 
                  or significant achievements in the 2010s.]
                </p>
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <p className="text-muted-foreground/70 text-xs">Historical Photo Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline Item 5 - Today */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Timeline Circle */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10 ring-4 ring-secondary/20">
            <span className="text-secondary font-bold text-lg">Today</span>
          </div>
          
          {/* Content Card - Left Side */}
          <div className="md:w-1/2 md:pr-12 md:text-right ml-24 md:ml-0">
            <Card className="border-secondary/30 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-secondary/5 to-background">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Continuing the Mission</CardTitle>
                <CardDescription className="text-sm">Our Present & Future</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  [Placeholder - Add content about current programs, the Trauma Recovery Practice, 
                  KidSafeHQ, and how The Rowan Center continues to serve the community today.]
                </p>
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <p className="text-muted-foreground/70 text-xs">Current Photo Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Spacer for right side on desktop */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Key Differences:

### Visual Design:
1. **Vertical Timeline Line**: A continuous gradient line connecting all timeline items
2. **Alternating Layout**: Cards alternate left/right on desktop for visual interest
3. **Centered Timeline**: Timeline circles are centered on desktop, creating a clear visual flow
4. **Enhanced Cards**: Larger cards with better shadows and hover effects
5. **Better Typography**: Larger titles, added descriptions/subtitles
6. **Special "Today" Item**: Highlighted with a ring effect and gradient background

### User Experience:
1. **Always Visible**: All content is visible (no accordion), making it easier to scan the full history
2. **Better Mobile**: Timeline circles on left, cards below on mobile
3. **Visual Flow**: The alternating pattern creates a natural reading flow
4. **Clear Hierarchy**: Each era has a distinct color and visual treatment

### Technical:
1. **No Accordion**: Simpler structure, all content visible
2. **Responsive**: Better mobile/desktop breakpoints
3. **Gradient Line**: Uses CSS gradient for the timeline connector
4. **Z-index Management**: Proper layering of timeline elements

Would you like me to implement this alternative design, or would you prefer a hybrid approach (timeline line + accordion functionality)?
