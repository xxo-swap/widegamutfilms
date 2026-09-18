import AboutPage from "@/components/AboutMe";
import PasswordGate from "@/components/PasswordGate";


export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PasswordGate>
        <AboutPage />
      </PasswordGate>
    </main>
  );
}