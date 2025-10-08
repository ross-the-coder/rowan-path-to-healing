import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const translations = {
  en: {
    title: "Student Advisory Board Application",
    description: "Join our Student Advisory Board to help raise awareness about sexual violence prevention at your school.",
    studentInfo: "Student Information",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    schoolName: "School Name",
    gradeLevel: "Grade Level",
    town: "Town",
    parentInfo: "Parent/Guardian Information",
    parentName: "Parent/Guardian Name",
    parentEmail: "Parent/Guardian Email",
    parentPhone: "Parent/Guardian Phone",
    whyInterested: "Why are you interested in joining the Student Advisory Board?",
    requirements: "Requirements Confirmation",
    requirementsIntro: "Please confirm that you meet all the following requirements:",
    gradeRequirement: "I am a sophomore, junior, or senior in high school",
    schoolLocation: "I attend high school in one of the eight towns: Darien, Greenwich, New Canaan, Norwalk, Stamford, Weston, Westport, or Wilton",
    monthlyMeetings: "I am able to attend monthly meetings (approximately 1 hour on one Sunday each month)",
    confidentiality: "I agree to keep all discussions and personal details shared during meetings private and not share identifying information outside of meetings",
    additionalComments: "Additional Comments (Optional)",
    submit: "Submit Application",
    submitting: "Submitting...",
    success: "Thank you! We've received your application and will contact you soon.",
    error: "Something went wrong. Please try again or contact us directly.",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    mustConfirmAll: "You must confirm all requirements to apply",
    sophomore: "Sophomore (10th Grade)",
    junior: "Junior (11th Grade)",
    senior: "Senior (12th Grade)",
  },
  es: {
    title: "Solicitud del Consejo Asesor Estudiantil",
    description: "Únase a nuestro Consejo Asesor Estudiantil para ayudar a crear conciencia sobre la prevención de la violencia sexual en su escuela.",
    studentInfo: "Información del Estudiante",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phone: "Teléfono",
    schoolName: "Nombre de la Escuela",
    gradeLevel: "Grado",
    town: "Ciudad",
    parentInfo: "Información del Padre/Tutor",
    parentName: "Nombre del Padre/Tutor",
    parentEmail: "Correo Electrónico del Padre/Tutor",
    parentPhone: "Teléfono del Padre/Tutor",
    whyInterested: "¿Por qué está interesado en unirse al Consejo Asesor Estudiantil?",
    requirements: "Confirmación de Requisitos",
    requirementsIntro: "Por favor confirme que cumple con todos los siguientes requisitos:",
    gradeRequirement: "Soy estudiante de segundo, tercer o cuarto año de secundaria",
    schoolLocation: "Asisto a la escuela secundaria en una de las ocho ciudades: Darien, Greenwich, New Canaan, Norwalk, Stamford, Weston, Westport o Wilton",
    monthlyMeetings: "Puedo asistir a reuniones mensuales (aproximadamente 1 hora un domingo al mes)",
    confidentiality: "Acepto mantener privadas todas las discusiones y detalles personales compartidos durante las reuniones y no compartir información identificativa fuera de las reuniones",
    additionalComments: "Comentarios Adicionales (Opcional)",
    submit: "Enviar Solicitud",
    submitting: "Enviando...",
    success: "¡Gracias! Hemos recibido su solicitud y nos pondremos en contacto pronto.",
    error: "Algo salió mal. Por favor intente de nuevo o contáctenos directamente.",
    required: "Este campo es obligatorio",
    invalidEmail: "Por favor ingrese un correo electrónico válido",
    mustConfirmAll: "Debe confirmar todos los requisitos para aplicar",
    sophomore: "Segundo Año (10º Grado)",
    junior: "Tercer Año (11º Grado)",
    senior: "Cuarto Año (12º Grado)",
  },
};

const createSchema = (lang: "en" | "es") => {
  const t = translations[lang];
  return z.object({
    firstName: z.string().trim().min(1, { message: t.required }).max(100),
    lastName: z.string().trim().min(1, { message: t.required }).max(100),
    email: z.string().trim().email({ message: t.invalidEmail }).max(255),
    phone: z.string().trim().min(1, { message: t.required }).max(50),
    schoolName: z.string().trim().min(1, { message: t.required }).max(200),
    gradeLevel: z.string().min(1, { message: t.required }),
    town: z.string().trim().min(1, { message: t.required }).max(100),
    parentName: z.string().trim().min(1, { message: t.required }).max(200),
    parentEmail: z.string().trim().email({ message: t.invalidEmail }).max(255),
    parentPhone: z.string().trim().min(1, { message: t.required }).max(50),
    whyInterested: z.string().trim().min(1, { message: t.required }).max(2000),
    gradeRequirement: z.boolean().refine((val) => val === true, { message: t.mustConfirmAll }),
    schoolLocation: z.boolean().refine((val) => val === true, { message: t.mustConfirmAll }),
    monthlyMeetings: z.boolean().refine((val) => val === true, { message: t.mustConfirmAll }),
    confidentiality: z.boolean().refine((val) => val === true, { message: t.mustConfirmAll }),
    additionalComments: z.string().trim().max(2000).optional(),
  });
};

interface StudentAdvisoryApplicationFormProps {
  language?: "en" | "es";
}

export const StudentAdvisoryApplicationForm = ({ language = "en" }: StudentAdvisoryApplicationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "es">(language);
  const t = translations[currentLang];

  const form = useForm<z.infer<ReturnType<typeof createSchema>>>({
    resolver: zodResolver(createSchema(currentLang)),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      schoolName: "",
      gradeLevel: "",
      town: "",
      parentName: "",
      parentEmail: "",
      parentPhone: "",
      whyInterested: "",
      gradeRequirement: false,
      schoolLocation: false,
      monthlyMeetings: false,
      confidentiality: false,
      additionalComments: "",
    },
  });

  const onSubmit = async (data: z.infer<ReturnType<typeof createSchema>>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("student_advisory_applications").insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        school_name: data.schoolName,
        grade_level: data.gradeLevel,
        town: data.town,
        parent_guardian_name: data.parentName,
        parent_guardian_email: data.parentEmail,
        parent_guardian_phone: data.parentPhone,
        why_interested: data.whyInterested,
        confirmed_grade_requirement: data.gradeRequirement,
        confirmed_school_location: data.schoolLocation,
        confirmed_monthly_meetings: data.monthlyMeetings,
        confirmed_confidentiality: data.confidentiality,
        additional_comments: data.additionalComments || null,
        form_language: currentLang,
      });

      if (error) throw error;

      toast.success(t.success);
      form.reset();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto bg-accent/5 border-accent/20">
      <CardHeader>
        <div className="flex justify-end mb-4">
          <Select value={currentLang} onValueChange={(value: "en" | "es") => setCurrentLang(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <CardTitle className="font-seasons text-3xl">{t.title}</CardTitle>
        <CardDescription className="font-roboto text-base">{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Student Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-seasons font-medium">{t.studentInfo}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t.firstName} *</Label>
                <Input id="firstName" {...form.register("firstName")} className="bg-white border-input" />
                {form.formState.errors.firstName && (
                  <p className="text-sm text-destructive">{form.formState.errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t.lastName} *</Label>
                <Input id="lastName" {...form.register("lastName")} className="bg-white border-input" />
                {form.formState.errors.lastName && (
                  <p className="text-sm text-destructive">{form.formState.errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t.email} *</Label>
                <Input id="email" type="email" {...form.register("email")} className="bg-white border-input" />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t.phone} *</Label>
                <Input id="phone" type="tel" {...form.register("phone")} className="bg-white border-input" />
                {form.formState.errors.phone && (
                  <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="schoolName">{t.schoolName} *</Label>
                <Input id="schoolName" {...form.register("schoolName")} className="bg-white border-input" />
                {form.formState.errors.schoolName && (
                  <p className="text-sm text-destructive">{form.formState.errors.schoolName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="gradeLevel">{t.gradeLevel} *</Label>
                <Select onValueChange={(value) => form.setValue("gradeLevel", value)}>
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sophomore">{t.sophomore}</SelectItem>
                    <SelectItem value="junior">{t.junior}</SelectItem>
                    <SelectItem value="senior">{t.senior}</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.gradeLevel && (
                  <p className="text-sm text-destructive">{form.formState.errors.gradeLevel.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="town">{t.town} *</Label>
                <Input id="town" {...form.register("town")} className="bg-white border-input" />
                {form.formState.errors.town && (
                  <p className="text-sm text-destructive">{form.formState.errors.town.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Parent/Guardian Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-seasons font-medium">{t.parentInfo}</h3>
            <div className="space-y-2">
              <Label htmlFor="parentName">{t.parentName} *</Label>
              <Input id="parentName" {...form.register("parentName")} className="bg-white border-input" />
              {form.formState.errors.parentName && (
                <p className="text-sm text-destructive">{form.formState.errors.parentName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="parentEmail">{t.parentEmail} *</Label>
                <Input id="parentEmail" type="email" {...form.register("parentEmail")} className="bg-white border-input" />
                {form.formState.errors.parentEmail && (
                  <p className="text-sm text-destructive">{form.formState.errors.parentEmail.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentPhone">{t.parentPhone} *</Label>
                <Input id="parentPhone" type="tel" {...form.register("parentPhone")} className="bg-white border-input" />
                {form.formState.errors.parentPhone && (
                  <p className="text-sm text-destructive">{form.formState.errors.parentPhone.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Why Interested */}
          <div className="space-y-2">
            <Label htmlFor="whyInterested">{t.whyInterested} *</Label>
            <Textarea id="whyInterested" rows={4} {...form.register("whyInterested")} className="bg-white border-input" />
            {form.formState.errors.whyInterested && (
              <p className="text-sm text-destructive">{form.formState.errors.whyInterested.message}</p>
            )}
          </div>

          {/* Requirements Confirmation */}
          <div className="space-y-4 bg-accent/10 p-6 rounded-lg">
            <h3 className="text-xl font-seasons font-medium">{t.requirements}</h3>
            <p className="font-roboto text-sm text-muted-foreground">{t.requirementsIntro}</p>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="gradeRequirement"
                  checked={form.watch("gradeRequirement")}
                  onCheckedChange={(checked) => form.setValue("gradeRequirement", checked as boolean)}
                />
                <Label htmlFor="gradeRequirement" className="font-normal cursor-pointer leading-relaxed">
                  {t.gradeRequirement}
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="schoolLocation"
                  checked={form.watch("schoolLocation")}
                  onCheckedChange={(checked) => form.setValue("schoolLocation", checked as boolean)}
                />
                <Label htmlFor="schoolLocation" className="font-normal cursor-pointer leading-relaxed">
                  {t.schoolLocation}
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="monthlyMeetings"
                  checked={form.watch("monthlyMeetings")}
                  onCheckedChange={(checked) => form.setValue("monthlyMeetings", checked as boolean)}
                />
                <Label htmlFor="monthlyMeetings" className="font-normal cursor-pointer leading-relaxed">
                  {t.monthlyMeetings}
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="confidentiality"
                  checked={form.watch("confidentiality")}
                  onCheckedChange={(checked) => form.setValue("confidentiality", checked as boolean)}
                />
                <Label htmlFor="confidentiality" className="font-normal cursor-pointer leading-relaxed">
                  {t.confidentiality}
                </Label>
              </div>
            </div>

            {(form.formState.errors.gradeRequirement || 
              form.formState.errors.schoolLocation || 
              form.formState.errors.monthlyMeetings || 
              form.formState.errors.confidentiality) && (
              <p className="text-sm text-destructive">{t.mustConfirmAll}</p>
            )}
          </div>

          {/* Additional Comments */}
          <div className="space-y-2">
            <Label htmlFor="additionalComments">{t.additionalComments}</Label>
            <Textarea id="additionalComments" rows={3} {...form.register("additionalComments")} className="bg-white border-input" />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.submitting}
              </>
            ) : (
              t.submit
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
