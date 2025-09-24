import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, DollarSign, TrendingUp } from "lucide-react";

const Financials = () => {
  const reports = [
    {
      year: "2023",
      title: "Annual Report 2023",
      description: "Complete overview of our programs, impact, and financial performance",
      size: "2.1 MB"
    },
    {
      year: "2022",
      title: "Annual Report 2022",
      description: "Previous year's comprehensive report and financial statements",
      size: "1.8 MB"
    },
    {
      year: "2021",
      title: "Annual Report 2021",
      description: "Historical performance and program outcomes",
      size: "1.9 MB"
    }
  ];

  const financialHighlights = [
    {
      metric: "Total Revenue",
      value: "$2.3M",
      change: "+12%",
      icon: DollarSign
    },
    {
      metric: "Program Expenses",
      value: "87%",
      change: "Efficient",
      icon: TrendingUp
    },
    {
      metric: "People Served",
      value: "3,847",
      change: "+23%",
      icon: FileText
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Financials & Reports
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparency and accountability are core values. Access our financial reports, 
            annual summaries, and organizational performance data.
          </p>
        </div>

        {/* Financial Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">2023 Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {financialHighlights.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{item.value}</CardTitle>
                  <CardDescription>
                    {item.metric} <span className="text-primary font-medium">({item.change})</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Annual Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Annual Reports</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{report.title}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Size: {report.size}</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Financial Transparency */}
        <section>
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Financial Transparency</CardTitle>
              <CardDescription className="text-lg">
                We are committed to transparency and responsible stewardship of donor funds
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Program Efficiency</h3>
                  <p className="text-muted-foreground">
                    87% of every dollar donated goes directly to programs and services 
                    that support survivors and prevent trauma in our community.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Independent Audit</h3>
                  <p className="text-muted-foreground">
                    Our financial statements are independently audited annually by 
                    certified public accountants to ensure accuracy and compliance.
                  </p>
                </div>
              </div>
              <Button asChild className="mt-8">
                <a href="mailto:info@rowancenternor.org?subject=Financial Inquiry">
                  Contact for More Information
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Financials;