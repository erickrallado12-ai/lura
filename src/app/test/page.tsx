import {prisma} from "@/lib/db";

export default async function TestPage() {
  const voices = await prisma.voice.findMany();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <pre>{JSON.stringify(voices, null, 2)}</pre>
    </div>
  );
}   