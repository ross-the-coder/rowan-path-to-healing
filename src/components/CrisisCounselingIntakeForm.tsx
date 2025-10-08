import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const translations = {
  en: {
    title: "Crisis Counseling Contact Form",
    description: "Share your information so we can schedule your first conversation. You may use a first name only if you prefer.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    town: "Town of Residence",
    preferredLanguage: "Preferred Language",
    contactPreference: "How should we contact you?",
    voicemailYes: "If you call me and I do not answer, you have my permission to leave me a voicemail",
    voicemailNo: "If you call me and I do not answer, please do not leave me a voicemail",
    requestDescription: "Please briefly describe your request for services",
    clientType: "Please select the option that applies to you",
    isClient: "I am the client",
    isReferrer: "I am submitting this for a client",
    referrerName: "Referrer's Name",
    referrerPhone: "Referrer's Phone",
    referrerEmail: "Referrer's Email",
    referrerOrg: "Name of the Referrer's Practice or Organization",
    submit: "Submit",
    submitting: "Submitting...",
    success: "Thank you! We've received your request and will contact you soon.",
    error: "Something went wrong. Please try again or call us directly.",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
  },
  es: {
    title: "Formulario de Contacto para Consejería de Crisis",
    description: "Comparta su información para que podamos programar su primera conversación. Puede usar solo su primer nombre si lo prefiere.",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phone: "Teléfono",
    town: "Ciudad de Residencia",
    preferredLanguage: "Idioma Preferido",
    contactPreference: "¿Cómo debemos contactarlo?",
    voicemailYes: "Si me llama y no contesto, tiene mi permiso para dejarme un mensaje de voz",
    voicemailNo: "Si me llama y no contesto, por favor no me deje un mensaje de voz",
    requestDescription: "Por favor describa brevemente su solicitud de servicios",
    clientType: "Por favor seleccione la opción que se aplica a usted",
    isClient: "Soy el cliente",
    isReferrer: "Estoy enviando esto para un cliente",
    referrerName: "Nombre del Referente",
    referrerPhone: "Teléfono del Referente",
    referrerEmail: "Correo Electrónico del Referente",
    referrerOrg: "Nombre de la Práctica u Organización del Referente",
    submit: "Enviar",
    submitting: "Enviando...",
    success: "¡Gracias! Hemos recibido su solicitud y nos pondremos en contacto pronto.",
    error: "Algo salió mal. Por favor intente de nuevo o llámenos directamente.",
    required: "Este campo es obligatorio",
    invalidEmail: "Por favor ingrese un correo electrónico válido",
  },
};

const createSchema = (lang: "en" | "es") => {
  const t = translations[lang];
  return z.object({
    firstName: z.string().trim().min(1, { message: t.required }).max(100),
    lastName: z.string().trim().min(1, { message: t.required }).max(100),
    email: z.string().trim().email({ message: t.invalidEmail }).max(255),
    phone: z.string().trim().min(1, { message: t.required }).max(50),
    town: z.string().trim().min(1, { message: t.required }).max(100),
    preferredLanguage: z.string().min(1, { message: t.required }),
    voicemailPermission: z.enum(["yes", "no"]),
    requestDescription: z.string().trim().min(1, { message: t.required }).max(2000),
    isClient: z.enum(["client", "referrer"]),
    referrerName: z.string().trim().max(100).optional(),
    referrerPhone: z.string().trim().max(50).optional(),
    referrerEmail: z.string().trim().email().max(255).optional().or(z.literal("")),
    referrerOrg: z.string().trim().max(200).optional(),
  });
};

interface CrisisCounselingIntakeFormProps {
  language?: "en" | "es";
}

export const CrisisCounselingIntakeForm = ({ language = "en" }: CrisisCounselingIntakeFormProps) => {
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
      town: "",
      preferredLanguage: "",
      voicemailPermission: "yes",
      requestDescription: "",
      isClient: "client",
      referrerName: "",
      referrerPhone: "",
      referrerEmail: "",
      referrerOrg: "",
    },
  });

  const isClient = form.watch("isClient");

  const onSubmit = async (data: z.infer<ReturnType<typeof createSchema>>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("crisis_counseling_intake").insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        town_of_residence: data.town,
        preferred_language: data.preferredLanguage,
        voicemail_permission: data.voicemailPermission === "yes",
        request_description: data.requestDescription,
        is_client: data.isClient === "client",
        referrer_name: data.isClient === "referrer" ? data.referrerName : null,
        referrer_phone: data.isClient === "referrer" ? data.referrerPhone : null,
        referrer_email: data.isClient === "referrer" ? data.referrerEmail : null,
        referrer_organization: data.isClient === "referrer" ? data.referrerOrg : null,
        form_language: currentLang,
      });

      if (error) throw error;

      toast.success(t.success);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-3xl mx-auto">
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
        <CardTitle className="font-seasons text-2xl">{t.title}</CardTitle>
        <CardDescription className="font-roboto">{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">{t.firstName} *</Label>
              <Input id="firstName" {...form.register("firstName")} />
              {form.formState.errors.firstName && (
                <p className="text-sm text-destructive">{form.formState.errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{t.lastName} *</Label>
              <Input id="lastName" {...form.register("lastName")} />
              {form.formState.errors.lastName && (
                <p className="text-sm text-destructive">{form.formState.errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t.email} *</Label>
              <Input id="email" type="email" {...form.register("email")} />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t.phone} *</Label>
              <Input id="phone" type="tel" {...form.register("phone")} />
              {form.formState.errors.phone && (
                <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="town">{t.town} *</Label>
              <Input id="town" {...form.register("town")} />
              {form.formState.errors.town && (
                <p className="text-sm text-destructive">{form.formState.errors.town.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredLanguage">{t.preferredLanguage} *</Label>
              <Select onValueChange={(value) => form.setValue("preferredLanguage", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Spanish">Spanish / Español</SelectItem>
                  <SelectItem value="Haitian Creole">Haitian Creole / Kreyòl Ayisyen</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.preferredLanguage && (
                <p className="text-sm text-destructive">{form.formState.errors.preferredLanguage.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <Label>{t.contactPreference} *</Label>
            <RadioGroup
              defaultValue="yes"
              onValueChange={(value) => form.setValue("voicemailPermission", value as "yes" | "no")}
            >
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="yes" id="voicemail-yes" />
                <Label htmlFor="voicemail-yes" className="font-normal cursor-pointer">
                  {t.voicemailYes}
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="no" id="voicemail-no" />
                <Label htmlFor="voicemail-no" className="font-normal cursor-pointer">
                  {t.voicemailNo}
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requestDescription">{t.requestDescription} *</Label>
            <Textarea
              id="requestDescription"
              rows={4}
              {...form.register("requestDescription")}
            />
            {form.formState.errors.requestDescription && (
              <p className="text-sm text-destructive">{form.formState.errors.requestDescription.message}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label>{t.clientType} *</Label>
            <RadioGroup
              defaultValue="client"
              onValueChange={(value) => form.setValue("isClient", value as "client" | "referrer")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="client" id="is-client" />
                <Label htmlFor="is-client" className="font-normal cursor-pointer">
                  {t.isClient}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="referrer" id="is-referrer" />
                <Label htmlFor="is-referrer" className="font-normal cursor-pointer">
                  {t.isReferrer}
                </Label>
              </div>
            </RadioGroup>
          </div>

          {isClient === "referrer" && (
            <div className="space-y-4 border-l-4 border-secondary pl-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="referrerName">{t.referrerName}</Label>
                  <Input id="referrerName" {...form.register("referrerName")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="referrerPhone">{t.referrerPhone}</Label>
                  <Input id="referrerPhone" type="tel" {...form.register("referrerPhone")} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="referrerEmail">{t.referrerEmail}</Label>
                <Input id="referrerEmail" type="email" {...form.register("referrerEmail")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="referrerOrg">{t.referrerOrg}</Label>
                <Input id="referrerOrg" {...form.register("referrerOrg")} />
              </div>
            </div>
          )}

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
