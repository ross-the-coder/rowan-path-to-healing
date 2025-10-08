import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  first_name: z.string().min(1, "First name is required").max(100),
  last_name: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(1, "Phone number is required").max(20),
  organization: z.string().max(200).optional(),
  message: z.string().min(1, "Message is required").max(2000),
});

type FormData = z.infer<typeof formSchema>;

const translations = {
  en: {
    title: "Questions or Scheduling?",
    subtitle: "Contact our Education Team",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    organization: "School/Organization (Optional)",
    message: "Your Question or Message",
    submit: "Send Message",
    submitting: "Sending...",
    success: "Thank you! We'll be in touch soon.",
    error: "Something went wrong. Please try again.",
    switchLang: "Español",
  },
  es: {
    title: "¿Preguntas o Programación?",
    subtitle: "Contacte a nuestro Equipo de Educación",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phone: "Teléfono",
    organization: "Escuela/Organización (Opcional)",
    message: "Su Pregunta o Mensaje",
    submit: "Enviar Mensaje",
    submitting: "Enviando...",
    success: "¡Gracias! Nos pondremos en contacto pronto.",
    error: "Algo salió mal. Por favor, inténtelo de nuevo.",
    switchLang: "English",
  },
};

export const PreventionEducationContactForm = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const t = translations[language];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("prevention_education_contact").insert([
        {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          organization: data.organization || null,
          message: data.message,
          form_language: language,
        },
      ]);

      if (error) throw error;

      toast({
        title: t.success,
      });
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto bg-secondary/5">
      <CardHeader className="text-center">
        <div className="flex justify-end mb-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
          >
            {t.switchLang}
          </Button>
        </div>
        <CardTitle className="text-3xl font-seasons font-normal">{t.title}</CardTitle>
        <p className="text-muted-foreground font-roboto">{t.subtitle}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first_name">{t.firstName}</Label>
              <Input id="first_name" {...register("first_name")} />
              {errors.first_name && (
                <p className="text-sm text-destructive mt-1">{errors.first_name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="last_name">{t.lastName}</Label>
              <Input id="last_name" {...register("last_name")} />
              {errors.last_name && (
                <p className="text-sm text-destructive mt-1">{errors.last_name.message}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">{t.email}</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">{t.phone}</Label>
              <Input id="phone" type="tel" {...register("phone")} />
              {errors.phone && (
                <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="organization">{t.organization}</Label>
            <Input id="organization" {...register("organization")} />
            {errors.organization && (
              <p className="text-sm text-destructive mt-1">{errors.organization.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">{t.message}</Label>
            <Textarea
              id="message"
              {...register("message")}
              rows={5}
              className="resize-none"
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? t.submitting : t.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
