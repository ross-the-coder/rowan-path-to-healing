import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Upload } from "lucide-react";

const translations = {
  en: {
    title: "Volunteer Application",
    description: "Apply to become a Crisis Advocate Volunteer. All information is confidential.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    address: "Address",
    age: "Age",
    resume: "Submit Your Resume",
    resumeHelp: "PDF, DOC, or DOCX format (max 5MB)",
    education: "Educational Background",
    occupation: "Current Occupation",
    volunteerExp: "Previous Volunteer Experience",
    hobbies: "Hobbies and Interests",
    howHeard: "How did you hear about The Rowan Center?",
    whyInterested: "Why are you interested in becoming a volunteer?",
    perceptionShaped: "Has anything in particular shaped your perception of sexual violence?",
    bestSkills: "What are some of your best skills and how would you like to apply them in the work that we do?",
    difficulties: "Is there anything in your life that would make it difficult to perform the duties necessary to be an active volunteer?",
    additionalComments: "Any additional information or comments",
    submit: "Submit Application",
    submitting: "Submitting...",
    uploading: "Uploading resume...",
    success: "Thank you! We've received your application and will contact you soon.",
    error: "Something went wrong. Please try again or contact us directly.",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    invalidAge: "Please enter a valid age (18+)",
    fileTooBig: "File is too large (max 5MB)",
    invalidFileType: "Invalid file type. Please upload PDF, DOC, or DOCX",
  },
  es: {
    title: "Solicitud de Voluntario",
    description: "Solicite convertirse en Voluntario Defensor de Crisis. Toda la información es confidencial.",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phone: "Teléfono",
    address: "Dirección",
    age: "Edad",
    resume: "Envíe su Currículum",
    resumeHelp: "Formato PDF, DOC o DOCX (máx. 5MB)",
    education: "Formación Académica",
    occupation: "Ocupación Actual",
    volunteerExp: "Experiencia Previa como Voluntario",
    hobbies: "Pasatiempos e Intereses",
    howHeard: "¿Cómo se enteró del Centro Rowan?",
    whyInterested: "¿Por qué está interesado en convertirse en voluntario?",
    perceptionShaped: "¿Algo en particular ha dado forma a su percepción de la violencia sexual?",
    bestSkills: "¿Cuáles son algunas de sus mejores habilidades y cómo le gustaría aplicarlas en el trabajo que hacemos?",
    difficulties: "¿Hay algo en su vida que dificultaría realizar las tareas necesarias para ser un voluntario activo?",
    additionalComments: "Cualquier información o comentario adicional",
    submit: "Enviar Solicitud",
    submitting: "Enviando...",
    uploading: "Subiendo currículum...",
    success: "¡Gracias! Hemos recibido su solicitud y nos pondremos en contacto pronto.",
    error: "Algo salió mal. Por favor intente de nuevo o contáctenos directamente.",
    required: "Este campo es obligatorio",
    invalidEmail: "Por favor ingrese un correo electrónico válido",
    invalidAge: "Por favor ingrese una edad válida (18+)",
    fileTooBig: "El archivo es demasiado grande (máx. 5MB)",
    invalidFileType: "Tipo de archivo no válido. Por favor cargue PDF, DOC o DOCX",
  },
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const createSchema = (lang: "en" | "es") => {
  const t = translations[lang];
  return z.object({
    firstName: z.string().trim().min(1, { message: t.required }).max(100),
    lastName: z.string().trim().min(1, { message: t.required }).max(100),
    email: z.string().trim().email({ message: t.invalidEmail }).max(255),
    phone: z.string().trim().min(1, { message: t.required }).max(50),
    address: z.string().trim().min(1, { message: t.required }).max(500),
    age: z.coerce.number().min(18, { message: t.invalidAge }).max(120),
    education: z.string().trim().min(1, { message: t.required }).max(1000),
    occupation: z.string().trim().min(1, { message: t.required }).max(500),
    volunteerExp: z.string().trim().min(1, { message: t.required }).max(2000),
    hobbies: z.string().trim().min(1, { message: t.required }).max(1000),
    howHeard: z.string().trim().min(1, { message: t.required }).max(500),
    whyInterested: z.string().trim().min(1, { message: t.required }).max(2000),
    perceptionShaped: z.string().trim().min(1, { message: t.required }).max(2000),
    bestSkills: z.string().trim().min(1, { message: t.required }).max(2000),
    difficulties: z.string().trim().min(1, { message: t.required }).max(2000),
    additionalComments: z.string().trim().max(2000).optional(),
  });
};

interface VolunteerApplicationFormProps {
  language?: "en" | "es";
}

export const VolunteerApplicationForm = ({ language = "en" }: VolunteerApplicationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "es">(language);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const t = translations[currentLang];

  const form = useForm<z.infer<ReturnType<typeof createSchema>>>({
    resolver: zodResolver(createSchema(currentLang)),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      age: 18,
      education: "",
      occupation: "",
      volunteerExp: "",
      hobbies: "",
      howHeard: "",
      whyInterested: "",
      perceptionShaped: "",
      bestSkills: "",
      difficulties: "",
      additionalComments: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast.error(t.fileTooBig);
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      toast.error(t.invalidFileType);
      return;
    }

    setResumeFile(file);
  };

  const onSubmit = async (data: z.infer<ReturnType<typeof createSchema>>) => {
    setIsSubmitting(true);
    let resumeUrl = null;

    try {
      // Upload resume if provided
      if (resumeFile) {
        toast.info(t.uploading);
        const fileExt = resumeFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('volunteer-resumes')
          .upload(filePath, resumeFile);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from('volunteer-resumes')
          .getPublicUrl(filePath);
        
        resumeUrl = urlData.publicUrl;
      }

      // Insert application
      const { error } = await supabase.from("volunteer_applications").insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        age: data.age,
        resume_url: resumeUrl,
        educational_background: data.education,
        current_occupation: data.occupation,
        previous_volunteer_experience: data.volunteerExp,
        hobbies_and_interests: data.hobbies,
        how_did_you_hear: data.howHeard,
        why_interested: data.whyInterested,
        perception_shaped: data.perceptionShaped,
        best_skills: data.bestSkills,
        difficulties: data.difficulties,
        additional_comments: data.additionalComments || null,
        form_language: currentLang,
      });

      if (error) throw error;

      toast.success(t.success);
      form.reset();
      setResumeFile(null);
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
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
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-seasons font-medium">Personal Information</h3>
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
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">{t.address} *</Label>
                <Input id="address" {...form.register("address")} className="bg-white border-input" />
                {form.formState.errors.address && (
                  <p className="text-sm text-destructive">{form.formState.errors.address.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">{t.age} *</Label>
                <Input id="age" type="number" min="18" {...form.register("age")} className="bg-white border-input" />
                {form.formState.errors.age && (
                  <p className="text-sm text-destructive">{form.formState.errors.age.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume">{t.resume}</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="bg-white border-input"
                />
                {resumeFile && (
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    {resumeFile.name}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{t.resumeHelp}</p>
            </div>
          </div>

          {/* Background Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-seasons font-medium">Background</h3>
            
            <div className="space-y-2">
              <Label htmlFor="education">{t.education} *</Label>
              <Textarea id="education" rows={3} {...form.register("education")} className="bg-white border-input" />
              {form.formState.errors.education && (
                <p className="text-sm text-destructive">{form.formState.errors.education.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation">{t.occupation} *</Label>
              <Input id="occupation" {...form.register("occupation")} className="bg-white border-input" />
              {form.formState.errors.occupation && (
                <p className="text-sm text-destructive">{form.formState.errors.occupation.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="volunteerExp">{t.volunteerExp} *</Label>
              <Textarea id="volunteerExp" rows={4} {...form.register("volunteerExp")} className="bg-white border-input" />
              {form.formState.errors.volunteerExp && (
                <p className="text-sm text-destructive">{form.formState.errors.volunteerExp.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="hobbies">{t.hobbies} *</Label>
              <Textarea id="hobbies" rows={3} {...form.register("hobbies")} className="bg-white border-input" />
              {form.formState.errors.hobbies && (
                <p className="text-sm text-destructive">{form.formState.errors.hobbies.message}</p>
              )}
            </div>
          </div>

          {/* Essay Questions */}
          <div className="space-y-4">
            <h3 className="text-xl font-seasons font-medium">About Your Interest</h3>

            <div className="space-y-2">
              <Label htmlFor="howHeard">{t.howHeard} *</Label>
              <Input id="howHeard" {...form.register("howHeard")} className="bg-white border-input" />
              {form.formState.errors.howHeard && (
                <p className="text-sm text-destructive">{form.formState.errors.howHeard.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="whyInterested">{t.whyInterested} *</Label>
              <Textarea id="whyInterested" rows={4} {...form.register("whyInterested")} className="bg-white border-input" />
              {form.formState.errors.whyInterested && (
                <p className="text-sm text-destructive">{form.formState.errors.whyInterested.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="perceptionShaped">{t.perceptionShaped} *</Label>
              <Textarea id="perceptionShaped" rows={4} {...form.register("perceptionShaped")} className="bg-white border-input" />
              {form.formState.errors.perceptionShaped && (
                <p className="text-sm text-destructive">{form.formState.errors.perceptionShaped.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bestSkills">{t.bestSkills} *</Label>
              <Textarea id="bestSkills" rows={4} {...form.register("bestSkills")} className="bg-white border-input" />
              {form.formState.errors.bestSkills && (
                <p className="text-sm text-destructive">{form.formState.errors.bestSkills.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulties">{t.difficulties} *</Label>
              <Textarea id="difficulties" rows={4} {...form.register("difficulties")} className="bg-white border-input" />
              {form.formState.errors.difficulties && (
                <p className="text-sm text-destructive">{form.formState.errors.difficulties.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalComments">{t.additionalComments}</Label>
              <Textarea id="additionalComments" rows={4} {...form.register("additionalComments")} className="bg-white border-input" />
              {form.formState.errors.additionalComments && (
                <p className="text-sm text-destructive">{form.formState.errors.additionalComments.message}</p>
              )}
            </div>
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
