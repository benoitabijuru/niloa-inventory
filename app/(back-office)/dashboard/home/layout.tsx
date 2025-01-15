import HomeNavbar from "@/components/dashboard/HomeNavbar";



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
     
      <div className="bg-orange-400 "> 
      <HomeNavbar/>
          {children} 
      </div> 
    
  );
}