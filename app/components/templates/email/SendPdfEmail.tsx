// React-email
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

// Variables
import { BASE_URL } from "@/lib/variables";

// Locales
import fr from "@/i18n/locales/fr.json";
import en from "@/i18n/locales/en.json";

type SendPdfEmailProps = {
    invoiceNumber: string;
    locale?: string;
};

export default function SendPdfEmail({
    invoiceNumber,
    locale = "fr",
}: SendPdfEmailProps) {
    const t = locale === "fr" ? fr.email : en.email;

    const logo = `${BASE_URL}/assets/img/chronodevis-logo.png`;
    return (
        <Html>
            <Head />
            <Preview>{t.preview.replace("#{invoiceNumber}", invoiceNumber)}</Preview>
            <Tailwind>
                <Body className="bg-gray-100">
                    <Container>
                        <Section className="bg-white border-black-950 my-10 px-10 py-4 rounded-md">
                            <Img
                                src={logo}
                                alt="ChronoDevis Logo"
                                width={200}
                                height={120}
                            />
                            <Heading className="leading-tight">{t.heading}</Heading>

                            <Text>
                                {t.text1} <b>#{invoiceNumber}</b> {t.text2}
                            </Text>

                            <Hr />

                            <Text>
                                {t.regards}
                                <br />
                                {t.team}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
