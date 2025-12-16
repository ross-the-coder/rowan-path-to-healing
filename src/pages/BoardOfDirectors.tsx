import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Mail } from "lucide-react";

const BoardOfDirectors = () => {
  const officers = [
    {
      name: "Jennifer Barnard",
      title: "Chair of the Board",
      bio: "Jennifer Barnard serves as Chair of the Board. She has been an elementary school teacher in New York City, Massachusetts, and Westport, CT. She is currently the Board of Governors chair at Horizons at New Canaan Country School and the Secretary on the board of Child Advocates of SW Connecticut, where she is also a volunteer child advocate. She is a trained Orton Gillingham reading specialist and tutor. Jennifer received a BS in Management from Villanova and holds a Master's in Elementary Education from Fordham University. Jennifer lives in Rowayton and has been a board member since 2019."
    },
    {
      name: "Keiley Fuller",
      title: "Vice Chair of the Board",
      bio: "Keiley Fuller serves as Vice Chair of the Board. She has worked for Kelly Associates and Houlihan Lawrence and has been a volunteer at the YWCA of Darien, Hindley School, Middlesex School, New Canaan Country School, and Westover School. She is also a successful real estate agent in Darien and one of the founding members of the Darien office of Compass Real Estate. She is a University of Denver graduate and lives in Darien. Keiley has been a board member since 2019."
    },
    {
      name: "Kristen Antonopoulos",
      title: "Treasurer of the Board",
      bio: "Kristen Antonopoulos serves as Treasurer of the Board. She is currently a Finance Vice President at American Express, where she has worked for 17 years. Kristen received her MBA from New York University and holds a bachelor's degree from Western Connecticut State University. Kristen lives in Stamford and has been a board member since 2018."
    },
    {
      name: "Lindsay Reed",
      title: "Secretary of the Board",
      bio: "Lindsay Reed serves as Secretary of the Board. She is currently a Partner in Carmody Torrance Sandak & Hennessey LLP's litigation group. Lindsay serves on the Executive Board of the Fairfield County Bar Association, and she is a member of the CT Bar Association and the New York Bar Association. Lindsay received her BA in Political Science from Loyola University Maryland and her JD from New England Law Boston. Lindsay lives in Stamford and has been a board member since 2020."
    },
  ];

  const boardMembers = [
    {
      name: "Elizabeth Koldyke Boolbol",
      bio: "Elizabeth Koldyke Boolbol is the Founder and Board Chair of Partnership to End Human Trafficking (PEHT). She is also an active volunteer with World Vision, having served as Co-Chair of its Fairfield County chapter, and has served on the Parent Association Board of Stanwich School, the Board of Trustees of Greens Farms Academy, and the Elder Board of Stanwich Congregational Church in Greenwich. She received a BA from Dartmouth College and an MBA from Kellogg Graduate School of Business, and she currently lives in Greenwich. Elizabeth has been a board member since 2019."
    },
    {
      name: "Caroline Chadwick",
      bio: "Caroline Chadwick, MSW, is the Head of Case Management & Public Policy at Anchor, a LGBTQ+ medical center in Stamford and Hamden, CT. She is a passionate advocate and helps patients overcome barriers to medical and mental health care, connects them to community and public assistance resources, and facilitates name and gender marker changes. Caroline is an active member of the LGBTQ+ Justice & Opportunity Network, serves on the LGBTQ+ Health Committee of the Comptroller's healthcare cabinet, and heads the Trans ID Clinic in New Haven. In 2020, she received her Master of Social Work from the University of Southern California and holds a Master's certificate in LGBTQ+ Health Policy from George Washington University. Caroline has been a board member since 2025."
    },
    {
      name: "Dorothea Donelan-Avery",
      bio: "Dorothea Donelan-Avery is the founder of Bowline Ventures, a multi-family real estate development company in Fairfield County that focuses on affordable and market rate buildings as well as a kitchen incubator in Westport, CT. She was President and Co-Founder of Node Brooklyn, an international co-living company where she was focused on overseeing the acquisition, development, management, and investment activities of residential properties in Brooklyn. Previously, Dorothea was SVP at Jefferies, managing a $1.5B fixed income portfolio focused on GSEs and Supra Sovereigns. She was also a Fixed Income trader at Merrill Lynch, overseeing a $2B portfolio. Dorothea graduated cum laude from Georgetown University with a dual major in Finance and International Business. She currently lives in Stamford with her husband and two children. Dorothea has been a board member since 2025."
    },
    {
      name: "Charles Galante",
      bio: "Charles Galante has over 25 years of experience in private equity and corporate banking. His most recent role was as Head of U.S. Corporate and Investment Banking at Santander Bank, based in New York City. In 2018, Charles retired from Wall Street to pursue personal interests, private investing and to serve on corporate and non-profit boards. Charles is currently a co-owner and board member of Susana Balbo Wines. In addition, Charles is president of the Galante Family Foundation, which focuses on orthopedic research, cancer research and education. He also serves on the boards of Horizons, The Community Fund of Darien and is a mentor and sponsor in the Shepherds Mentors program, based in Bridgeport, CT. Charles received his B.A. from Hamilton College, an M.A. from University of Chicago and an M.B.A. from Thunderbird. He is fluent in Spanish and Portuguese. Originally from Chicago, he has lived in Darien since 1999, together with his wife and four children. Charles has been a board member since 2025."
    },
    {
      name: "Samuelle Jacobs",
      bio: "Samuelle Jacobs spent her career in Finance before pivoting to real estate, where she worked as a Strategic Growth Manager for a real estate startup. She has been active in the Junior League of Greenwich since 2019 and currently serves as President, following her tenures as Project Director and as Director of Communications. She is a native of Greenwich and serves on the Greenwich RTM as well as the board of Round Hill Nursery School. She received her Bachelor of Arts degree from Fordham University. Samuelle currently resides in Greenwich and has been a board member since 2024."
    },
    {
      name: "Jennifer Marrone",
      bio: "Jennifer Marrone is an Ob/gyn MD specializing in Gynecology at Southport Women's Healthcare. She is also a proud mother of two daughters, a wife, and an advocate for treating people with kindness and empathy. Her work in the sexual violence prevention field started in college, where she was trained as a counselor for RAINN. She volunteered at Albany Rape Crisis Center and in the New City NY Center as a rape crisis counselor. After graduating residency at Bridgeport Hospital Yale New Haven Healthcare in 2008 as an Ob/gyn MD, Jennifer worked for a nonprofit Community Health Center serving the underprivileged population of Norwalk for 11 years. As a former professor at Quinnipiac Medical School and a current preceptor for the Sacred Heart PA program, Jennifer believes we all have a role in helping to change the world we live in. Jennifer currently resides in Westport and has been a board member since 2024."
    },
    {
      name: "Jennifer McMahon",
      bio: "Jennifer McMahon brings marketing knowledge from a previous career in consumer-packaged goods to her current work in real estate with William Raveis. Jennifer is an alumnus of Fairfield University and has held numerous volunteer positions throughout Fairfield County, including as a member of the Easton Racquet Club Board and a member of Impact, serving on the grant review committee. Jennifer has supported The Rowan Center as a member of the Gingerbread event committee in the past few years. Jennifer lives in Westport and has been a board member since 2022."
    },
    {
      name: "Alexandra Nash",
      bio: "Alexandra Nash graduated from the University of Pennsylvania and went on to earn a Master of Fine Arts in Photography from Pratt Institute. After graduating, she held short stints at Vogue magazine and The Gap before launching her own children's photography business, Grass Stew Kids Photography. In 2000, she moved abroad with her husband. Their four children were born and raised in Berlin, as well as Milan and London. Her volunteer work has included serving as a \"listening volunteer\" at The Listening Place in London, offering in-person support to individuals experiencing suicidal ideation. After returning to the U.S., she trained as a Crisis Counselor and volunteered with the Crisis Text Line. Alexandra is a current and active advocate on The Rowan Center hotline. She also serves on the board of Child Advocates of Southwestern Connecticut. Alexandra lives with her family in Greenwich and has been a board member since 2025."
    },
    {
      name: "Michael O'Neill",
      bio: "Michael O'Neill has over 30 years of experience leading not-for-profit organizations of various sizes in the USA and the United Kingdom. Michael has served on numerous domestic and international boards, including as a founding board member of a Dual Qualified USA/UK Donor Advised Fund and a UK-based law firm structured as a faith-based charity. In 2008, he was part of a team that worked together to create Restore NYC, which serves survivors of trafficking and sexual exploitation. He is a graduate of the University of Mount Saint Vincent and has a Certificate in Not-for-Profit Management from Columbia University's Graduate School of Business. A native New Yorker, Michael lives in North Stamford and has been a board member since 2024."
    },
    {
      name: "Katherine Samy",
      bio: "Katherine Samy previously served as Secretary of the Board. She has coordinated the Annual Push-n-Pull Parade supporting the local VFW and has worked on fundraising events supporting ABC Darien for several years. She is a trained Sexual Assault Crisis Advocate and is pursuing a nursing degree to practice midwifery. Katherine earned an MA in Social and Political Science from the University of Cambridge and a post-graduate diploma in Law. Katherine currently lives in Darien and has been a board member since 2022."
    },
    {
      name: "Gene Schreiner",
      bio: "Gene Schreiner has over 30 years of experience in commercial banking, lending, and credit, and is currently the Director of Commercial Lending at Housing Development Fund (HDF). Gene received a BS in Economics from Mount St. Mary's College and currently serves on the Board of Directors of the Stamford Chamber of Commerce and on the Norwalk Chamber of Commerce Small Business Council. Gene currently lives in Fairfield and has been a board member since 2017."
    },
    {
      name: "Chandler Stroud",
      bio: "Chandler Stroud is a seasoned brand marketer having worked for Heinz, Danone, and eventually American Express where she spent ten years building and leading B2B marketing teams, ultimately stepping away from her role as Vice President, Restaurant Marketing for Amex's Global Dining Platform, Resy in 2024. Chandler is now the Founder & Host of The Healing Heroes Podcast, a show dedicated to empowering women to find better health and happiness using holistic approaches to healing. She earned her BA from Colgate University, and MBA from Carnegie Mellon, and lives in Darien with her husband and two kids. Chandler has been a board member since 2025."
    },
    {
      name: "Callie Sullivan",
      bio: "Callie Sullivan was previously Vice President of Sales of HMSDesign and has been an active volunteer of A Better Chance Darien, Planned Parenthood of Southern Connecticut, and Darien League of Women Voters. She is currently President of Sullivan Property Holdings. She served on the Darien Board of Education and the Darien Board of Selectmen, and she has been honored as a YWCA Woman of Distinction by the YWCA of Darien/Norwalk. She is a graduate of Williams College and lives in Darien. Callie has been a board member since 2018."
    },
    {
      name: "Jen Weil",
      bio: "Jen Weil spent her early career in San Francisco and Seattle, where she was the Director of Business Development at Oracle. She has been an active member of Impact Fairfield County for five years and has served on various committees, including Grant Review, Membership, Scholarship, and Mentorship. Her volunteer efforts have fueled her desire to help and serve the most underrepresented and impoverished communities in Fairfield County. Jen received her BS in International Relations & Public Affairs from Syracuse University's Maxwell School of Citizenship, and she currently lives in Westport. Jen became a board member in 2023."
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Board of Directors
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated board members bring diverse expertise and unwavering commitment 
            to advancing The Rowan Center's mission of preventing trauma and supporting healing.
          </p>
        </div>

        {/* Board Officers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Board Officers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {officers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {member.title}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Board Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Board Members</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {boardMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-7 w-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advisory Council */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Advisory Council</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Michael P. Diliberto",
                  "Dr. Catherine Ford, MD",
                  "Whitney Franklin",
                  "Lee Ganshaw, PNP",
                  "Robert Hagan",
                  "Colleen O'Neil",
                  "Stephanie Paulmeno, MS, RN, NHA",
                  "Jayme Stevenson, Former Board Member",
                  "Kate Vivanco, EdM, LCSW",
                  "Gayle Weinstein, Former Chair of the Board",
                  "Rebecca Wilson, LMSW",
                ].map((name, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Governance */}
        <section className="mb-16">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-4">Governance & Oversight</CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Our board ensures effective governance, strategic direction, and accountability to our community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Strategic Planning</h3>
                  <p className="text-sm text-muted-foreground">
                    Developing and monitoring our 3-year strategic plan to expand services and community impact
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Financial Oversight</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensuring responsible financial management and transparent reporting to stakeholders
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Community Accountability</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintaining strong connections with community needs and survivor voices in our decision-making
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <Card className="border-secondary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl mb-4">Contact the Board</CardTitle>
              <CardDescription>
                Questions, feedback, or suggestions for the Board of Directors? We want to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Board communications are handled through our Executive Director's office to ensure 
                proper coordination and response.
              </p>
              <a 
                href="mailto:board@rowancenternor.org?subject=Board Inquiry" 
                className="text-primary hover:underline font-medium"
              >
                board@rowancenternor.org
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default BoardOfDirectors;