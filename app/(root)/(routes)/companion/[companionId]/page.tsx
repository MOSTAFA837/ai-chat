import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import CompanionForm from "./_components/companion-form";

interface Props {
  params: { companionId: string };
}

export default async function CompanionIdPage({ params }: Props) {
  const { userId } = auth();
  if (!userId) return redirectToSignIn();

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
}
