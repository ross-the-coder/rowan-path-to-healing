import { writeClient, hasValidToken } from '../lib/client';

async function importBoardMembers() {
  if (!hasValidToken()) {
    console.error('❌ SANITY_API_TOKEN environment variable is not set!');
    console.log('\nPlease set your Sanity API token first.');
    console.log('See IMPORT_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  console.log('🚀 Starting board members import...\n');
  
  const officers = [
    {
      name: "Jennifer Barnard",
      title: "Chair of the Board",
      bio: "Jennifer Barnard serves as Chair of the Board. She has been an elementary school teacher in New York City, Massachusetts, and Westport, CT. She is currently the Board of Governors chair at Horizons at New Canaan Country School and the Secretary on the board of Child Advocates of SW Connecticut, where she is also a volunteer child advocate. She is a trained Orton Gillingham reading specialist and tutor. Jennifer received a BS in Management from Villanova and holds a Master's in Elementary Education from Fordham University. Jennifer lives in Rowayton and has been a board member since 2019.",
      order: 1,
      isOfficer: true
    },
    {
      name: "Keiley Fuller",
      title: "Vice Chair of the Board",
      bio: "Keiley Fuller serves as Vice Chair of the Board. She has worked for Kelly Associates and Houlihan Lawrence and has been a volunteer at the YWCA of Darien, Hindley School, Middlesex School, New Canaan Country School, and Westover School. She is also a successful real estate agent in Darien and one of the founding members of the Darien office of Compass Real Estate. She is a University of Denver graduate and lives in Darien. Keiley has been a board member since 2019.",
      order: 2,
      isOfficer: true
    },
    {
      name: "Kristen Antonopoulos",
      title: "Treasurer of the Board",
      bio: "Kristen Antonopoulos serves as Treasurer of the Board. She is currently a Finance Vice President at American Express, where she has worked for 17 years. Kristen received her MBA from New York University and holds a bachelor's degree from Western Connecticut State University. Kristen lives in Stamford and has been a board member since 2018.",
      order: 3,
      isOfficer: true
    },
    {
      name: "Lindsay Reed",
      title: "Secretary of the Board",
      bio: "Lindsay Reed serves as Secretary of the Board. She is currently a Partner in Carmody Torrance Sandak & Hennessey LLP's litigation group. Lindsay serves on the Executive Board of the Fairfield County Bar Association, and she is a member of the CT Bar Association and the New York Bar Association. Lindsay received her BA in Political Science from Loyola University Maryland and her JD from New England Law Boston. Lindsay lives in Stamford and has been a board member since 2020.",
      order: 4,
      isOfficer: true
    },
  ];

  const boardMembers = [
    {
      name: "Elizabeth Koldyke Boolbol",
      title: "Board Member",
      bio: "Elizabeth Koldyke Boolbol is the Founder and Board Chair of Partnership to End Human Trafficking (PEHT). She is also an active volunteer with World Vision, having served as Co-Chair of its Fairfield County chapter, and has served on the Parent Association Board of Stanwich School, the Board of Trustees of Greens Farms Academy, and the Elder Board of Stanwich Congregational Church in Greenwich. She received a BA from Dartmouth College and an MBA from Kellogg Graduate School of Business, and she currently lives in Greenwich. Elizabeth has been a board member since 2019.",
      order: 5
    },
    {
      name: "Caroline Chadwick",
      title: "Board Member",
      bio: "Caroline Chadwick, MSW, is the Head of Case Management & Public Policy at Anchor, a LGBTQ+ medical center in Stamford and Hamden, CT. She is a passionate advocate and helps patients overcome barriers to medical and mental health care, connects them to community and public assistance resources, and facilitates name and gender marker changes. Caroline is an active member of the LGBTQ+ Justice & Opportunity Network, serves on the LGBTQ+ Health Committee of the Comptroller's healthcare cabinet, and heads the Trans ID Clinic in New Haven. In 2020, she received her Master of Social Work from the University of Southern California and holds a Master's certificate in LGBTQ+ Health Policy from George Washington University. Caroline has been a board member since 2025.",
      order: 6
    },
    {
      name: "Dorothea Donelan-Avery",
      title: "Board Member",
      bio: "Dorothea Donelan-Avery is the founder of Bowline Ventures, a multi-family real estate development company in Fairfield County that focuses on affordable and market rate buildings as well as a kitchen incubator in Westport, CT. She was President and Co-Founder of Node Brooklyn, an international co-living company where she was focused on overseeing the acquisition, development, management, and investment activities of residential properties in Brooklyn. Previously, Dorothea was SVP at Jefferies, managing a $1.5B fixed income portfolio focused on GSEs and Supra Sovereigns. She was also a Fixed Income trader at Merrill Lynch, overseeing a $2B portfolio. Dorothea graduated cum laude from Georgetown University with a dual major in Finance and International Business. She currently lives in Stamford with her husband and two children. Dorothea has been a board member since 2025.",
      order: 7
    },
    {
      name: "Charles Galante",
      title: "Board Member",
      bio: "Charles Galante has over 25 years of experience in private equity and corporate banking. His most recent role was as Head of U.S. Corporate and Investment Banking at Santander Bank, based in New York City. In 2018, Charles retired from Wall Street to pursue personal interests, private investing and to serve on corporate and non-profit boards. Charles is currently a co-owner and board member of Susana Balbo Wines. In addition, Charles is president of the Galante Family Foundation, which focuses on orthopedic research, cancer research and education. He also serves on the boards of Horizons, The Community Fund of Darien and is a mentor and sponsor in the Shepherds Mentors program, based in Bridgeport, CT. Charles received his B.A. from Hamilton College, an M.A. from University of Chicago and an M.B.A. from Thunderbird. He is fluent in Spanish and Portuguese. Originally from Chicago, he has lived in Darien since 1999, together with his wife and four children. Charles has been a board member since 2025.",
      order: 8
    },
    {
      name: "Samuelle Jacobs",
      title: "Board Member",
      bio: "Samuelle Jacobs spent her career in Finance before pivoting to real estate, where she worked as a Strategic Growth Manager for a real estate startup. She has been active in the Junior League of Greenwich since 2019 and currently serves as President, following her tenures as Project Director and as Director of Communications. She is a native of Greenwich and serves on the Greenwich RTM as well as the board of Round Hill Nursery School. She received her Bachelor of Arts degree from Fordham University. Samuelle currently resides in Greenwich and has been a board member since 2024.",
      order: 9
    },
    {
      name: "Jennifer Marrone",
      title: "Board Member",
      bio: "Jennifer Marrone is an Ob/gyn MD specializing in Gynecology at Southport Women's Healthcare. She is also a proud mother of two daughters, a wife, and an advocate for treating people with kindness and empathy. Her work in the sexual violence prevention field started in college, where she was trained as a counselor for RAINN. She volunteered at Albany Rape Crisis Center and in the New City NY Center as a rape crisis counselor. After graduating residency at Bridgeport Hospital Yale New Haven Healthcare in 2008 as an Ob/gyn MD, Jennifer worked for a nonprofit Community Health Center serving the underprivileged population of Norwalk for 11 years. As a former professor at Quinnipiac Medical School and a current preceptor for the Sacred Heart PA program, Jennifer believes we all have a role in helping to change the world we live in. Jennifer currently resides in Westport and has been a board member since 2024.",
      order: 10
    },
    {
      name: "Jennifer McMahon",
      title: "Board Member",
      bio: "Jennifer McMahon brings marketing knowledge from a previous career in consumer-packaged goods to her current work in real estate with William Raveis. Jennifer is an alumnus of Fairfield University and has held numerous volunteer positions throughout Fairfield County, including as a member of the Easton Racquet Club Board and a member of Impact, serving on the grant review committee. Jennifer has supported The Rowan Center as a member of the Gingerbread event committee in the past few years. Jennifer lives in Westport and has been a board member since 2022.",
      order: 11
    },
    {
      name: "Alexandra Nash",
      title: "Board Member",
      bio: "Alexandra Nash graduated from the University of Pennsylvania and went on to earn a Master of Fine Arts in Photography from Pratt Institute. After graduating, she held short stints at Vogue magazine and The Gap before launching her own children's photography business, Grass Stew Kids Photography. In 2000, she moved abroad with her husband. Their four children were born and raised in Berlin, as well as Milan and London. Her volunteer work has included serving as a \"listening volunteer\" at The Listening Place in London, offering in-person support to individuals experiencing suicidal ideation. After returning to the U.S., she trained as a Crisis Counselor and volunteered with the Crisis Text Line. Alexandra is a current and active advocate on The Rowan Center helpline. She also serves on the board of Child Advocates of Southwestern Connecticut. Alexandra lives with her family in Greenwich and has been a board member since 2025.",
      order: 12
    },
    {
      name: "Michael O'Neill",
      title: "Board Member",
      bio: "Michael O'Neill has over 30 years of experience leading not-for-profit organizations of various sizes in the USA and the United Kingdom. Michael has served on numerous domestic and international boards, including as a founding board member of a Dual Qualified USA/UK Donor Advised Fund and a UK-based law firm structured as a faith-based charity. In 2008, he was part of a team that worked together to create Restore NYC, which serves survivors of trafficking and sexual exploitation. He is a graduate of the University of Mount Saint Vincent and has a Certificate in Not-for-Profit Management from Columbia University's Graduate School of Business. A native New Yorker, Michael lives in North Stamford and has been a board member since 2024.",
      order: 13
    },
    {
      name: "Katherine Samy",
      title: "Board Member",
      bio: "Katherine Samy previously served as Secretary of the Board. She has coordinated the Annual Push-n-Pull Parade supporting the local VFW and has worked on fundraising events supporting ABC Darien for several years. She is a trained Sexual Assault Crisis Advocate and is pursuing a nursing degree to practice midwifery. Katherine earned an MA in Social and Political Science from the University of Cambridge and a post-graduate diploma in Law. Katherine currently lives in Darien and has been a board member since 2022.",
      order: 14
    },
    {
      name: "Gene Schreiner",
      title: "Board Member",
      bio: "Gene Schreiner has over 30 years of experience in commercial banking, lending, and credit, and is currently the Director of Commercial Lending at Housing Development Fund (HDF). Gene received a BS in Economics from Mount St. Mary's College and currently serves on the Board of Directors of the Stamford Chamber of Commerce and on the Norwalk Chamber of Commerce Small Business Council. Gene currently lives in Fairfield and has been a board member since 2017.",
      order: 15
    },
    {
      name: "Chandler Stroud",
      title: "Board Member",
      bio: "Chandler Stroud is a seasoned brand marketer having worked for Heinz, Danone, and eventually American Express where she spent ten years building and leading B2B marketing teams, ultimately stepping away from her role as Vice President, Restaurant Marketing for Amex's Global Dining Platform, Resy in 2024. Chandler is now the Founder & Host of The Healing Heroes Podcast, a show dedicated to empowering women to find better health and happiness using holistic approaches to healing. She earned her BA from Colgate University, and MBA from Carnegie Mellon, and lives in Darien with her husband and two kids. Chandler has been a board member since 2025.",
      order: 16
    },
    {
      name: "Callie Sullivan",
      title: "Board Member",
      bio: "Callie Sullivan was previously Vice President of Sales of HMSDesign and has been an active volunteer of A Better Chance Darien, Planned Parenthood of Southern Connecticut, and Darien League of Women Voters. She is currently President of Sullivan Property Holdings. She served on the Darien Board of Education and the Darien Board of Selectmen, and she has been honored as a YWCA Woman of Distinction by the YWCA of Darien/Norwalk. She is a graduate of Williams College and lives in Darien. Callie has been a board member since 2018.",
      order: 17
    },
    {
      name: "Jen Weil",
      title: "Board Member",
      bio: "Jen Weil spent her early career in San Francisco and Seattle, where she was the Director of Business Development at Oracle. She has been an active member of Impact Fairfield County for five years and has served on various committees, including Grant Review, Membership, Scholarship, and Mentorship. Her volunteer efforts have fueled her desire to help and serve the most underrepresented and impoverished communities in Fairfield County. Jen received her BS in International Relations & Public Affairs from Syracuse University's Maxwell School of Citizenship, and she currently lives in Westport. Jen became a board member in 2023.",
      order: 18
    },
  ];

  try {
    // Delete existing board members
    const existing = await writeClient.fetch(`*[_type == "boardMember"]{ _id }`);
    
    if (existing.length > 0) {
      console.log(`🗑️  Deleting ${existing.length} existing board members...`);
      for (const member of existing) {
        await writeClient.delete(member._id);
      }
      console.log('✅ Cleared existing board members\n');
    }
    
    let imported = 0;
    let failed = 0;
    
    console.log('👔 Importing board officers...\n');
    
    for (const member of officers) {
      try {
        const doc = {
          _type: 'boardMember',
          name: member.name,
          title: member.title,
          bio: member.bio,
          order: member.order,
        };
        
        await writeClient.create(doc);
        console.log(`✅ [Officer] ${member.name} - ${member.title}`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import officer:`, error);
        failed++;
      }
    }
    
    console.log('\n👥 Importing board members...\n');
    
    for (const member of boardMembers) {
      try {
        const doc = {
          _type: 'boardMember',
          name: member.name,
          title: member.title,
          bio: member.bio,
          order: member.order,
        };
        
        await writeClient.create(doc);
        console.log(`✅ ${member.name}`);
        imported++;
      } catch (error) {
        console.error(`❌ Failed to import member:`, error);
        failed++;
      }
    }
    
    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Imported: ${imported} board members (4 officers + ${boardMembers.length} members)`);
    if (failed > 0) {
      console.log(`   ❌ Failed: ${failed}`);
    }
    console.log(`\n📝 View in Sanity Studio: http://localhost:3333\n`);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importBoardMembers();
