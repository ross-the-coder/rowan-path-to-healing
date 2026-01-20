import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, DollarSign, TrendingUp, ShieldCheck, Scale, HandCoins } from "lucide-react";

const Financials = () => {
  const reports = [
    {
      year: "2024-2025",
      title: "Annual Report 2024-2025",
      description: "Comprehensive report and financial statements",
      size: "2.5 MB",
      downloadUrl: "/reports/TRC_2024-25_Annual_Report.pdf",
      form990Url: "/reports/TRC_2024_Form_990.pdf",
      coverImage: "/reports/thumbnails/2024.png"
    },
    {
      year: "2023-2024",
      title: "Annual Report 2023-2024",
      description: "Comprehensive report and financial statements",
      size: "2.1 MB",
      downloadUrl: "/reports/TRC_2023-24_Annual_Report.pdf",
      form990Url: "/reports/TRC_2023_Form_990.pdf",
      coverImage: "/reports/thumbnails/2023.png"
    },
    {
      year: "2022-2023",
      title: "Annual Report 2022-2023",
      description: "Comprehensive report and financial statements",
      size: "1.8 MB",
      downloadUrl: "/reports/TRC_2022-23_Annual_Report.pdf",
      form990Url: "/reports/TRC_2022_Form_990.pdf",
      coverImage: "/reports/thumbnails/2022.png"
    },
  ];

  const financialHighlights = [
    {
      metric: "Total Revenue",
      value: "$1.6M",
      icon: DollarSign
    },
    {
      metric: "Program Expenses",
      value: "78%",
      icon: TrendingUp
    },
    {
      metric: "Services Provided",
      value: "8,244",
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
        <h2 className="text-3xl font-bold text-foreground text-center mb-8">2024-2025 Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {financialHighlights.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{item.value}</CardTitle>
                  <CardDescription>{item.metric}</CardDescription>
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
              <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                <CardHeader>
                  {report.coverImage ? (
                    <div className="mb-4 overflow-hidden rounded-lg border border-muted/30 bg-muted/20">
                      <img
                        src={report.coverImage}
                        alt={`${report.title} cover`}
                        className="w-full h-64 object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                      <FileText className="h-8 w-8 text-secondary" />
                    </div>
                  )}
                  <CardTitle className="text-xl">{report.title}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Size: {report.size}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="w-full sm:w-1/2 bg-primary text-white hover:bg-primary/90" asChild>
                      <a href={report.downloadUrl || "#"} download={!!report.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                    {report.form990Url && (
                      <Button className="w-full sm:w-1/2 bg-primary text-white hover:bg-primary/90" asChild>
                        <a href={report.form990Url} download target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-2" />
                          Download 990
                        </a>
                      </Button>
                    )}
                  </div>
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
            <CardContent>
              <ul className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto text-center">
                <li className="flex flex-col items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Independent audit</p>
                    <p className="text-muted-foreground">
                      Financial statements are audited annually by certified public accountants.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Governance oversight</p>
                    <p className="text-muted-foreground">
                      Board review and internal controls guide responsible stewardship of funds.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <HandCoins className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Public filings available</p>
                    <p className="text-muted-foreground">
                      IRS Form 990 filings are available for download.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex justify-center">
                <Button asChild className="mt-8">
                  <a href="mailto:info@therowancenter.org?subject=Financial Inquiry">
                  Contact for More Information
                </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Financials;