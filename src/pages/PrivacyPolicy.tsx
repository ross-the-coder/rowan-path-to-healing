import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-seasons text-4xl md:text-5xl text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Rowan Center is committed to protecting the privacy and accuracy of confidential information. 
                Personally-identifiable information is not actively shared. The Rowan Center does not re-distribute 
                or sell personal information collected on our web servers. The Rowan Center does not collect 
                personally-identifiable information unless it is voluntarily provided by the user through forms 
                or other direct contact methods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Information Collected</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Rowan Center's web servers collect the following information: Internet Protocol (IP) address 
                of the computer being used; web pages viewed; referring web page; browser used; date and time; 
                and statistics identifying particular IP addresses from which our websites are accessed. The Rowan 
                Center does not associate this data with individual user identities and it is solely used for the 
                analysis of site use. The Rowan Center's website is not intended to handle confidential information. 
                If you need to discuss a confidential matter, please refer to our Contact page to email our staff 
                directly or call our 24/7 confidential helpline.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Use of Cookies for Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses a third-party analytics provider (Google Analytics) to help us understand how 
                visitors use our site. This aggregated information is used to improve our content and your experience 
                when visiting our site. Google Analytics does not receive personally identifiable information through 
                these cookies and is prohibited from combining, matching, or cross-referencing information from our 
                site with any other information. Please review Google Analytics' privacy policy for additional 
                information. You can opt-out of Google Analytics by installing the{" "}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>, which prevents data from being collected during future visits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Use of Collected Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Rowan Center will use personal information collected from this site and associated forms 
                for communication back to individuals who contact us via the site. If any information is intended 
                for other uses (such as petitions to elected officials), The Rowan Center will ask for your 
                permission to share or use the information provided on the form. Information collected will be 
                retained only as long as necessary for the purposes stated or as required by law. You may request 
                to update or remove your personal information by contacting us directly.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Rowan Center uses browser-IP-address information and anonymous browser history to report 
                information about site access and to determine the effectiveness of our content and campaigns. 
                This information is used to improve web presentation and utilization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Distribution of Collected Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will not disclose, without your explicit consent, personal information collected about you. 
                We will not distribute or sell personal information to third-party organizations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Donations and Other Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you donate on The Rowan Center's website by clicking the "Donate" link in the menu, we must 
                share some of your personally identifiable information with third parties to process the transaction. 
                For example, we must share your credit card number with our payment processors. These third parties 
                are not allowed to use personally identifiable information except for providing their services. 
                We do not share your personally identifiable information with unrelated third parties for marketing 
                purposes without your consent.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Rowan Center also regularly hosts fundraising campaigns through third-party sites. When you 
                contribute to a campaign through donation, The Rowan Center is notified of your donation and 
                contact information. We do not receive your payment information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Social Media</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Rowan Center's social media pages are not intended for confidential communication. To receive 
                support and services, please reach out to our 24/7 confidential helpline. While we cannot guarantee 
                confidentiality on our social media platforms, The Rowan Center strives to keep all communication 
                on these sites as secure as possible. If any post contains sensitive information, such as identifying 
                details of another survivor, our team will take immediate action, including removal of the comment 
                and follow-up via private message to offer appropriate support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Your Safety</h2>
              <p className="text-muted-foreground leading-relaxed">
                Victims and survivors of sexual violence are often concerned about maintaining their privacy. 
                It is essential to recognize that internet activity can be tracked and recorded. For every page 
                you visit on the web, your browser stores a variety of information that anyone with access to 
                your computer may view. While it is not possible to delete or remove all digital "footprints," 
                we can help you understand how to reduce your online exposure and maintain your privacy. If you 
                need assistance with digital security or have concerns, please don't hesitate to reach out to our team.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <a 
                  href="https://endsexualviolencect.com/technology/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Learn more about digital security
                </a>{" "}
                and remember to clear your browser history after visiting this website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
