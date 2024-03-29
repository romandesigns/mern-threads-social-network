import { Badge } from "@/components/ui/badge";
import { GoDotFill } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { useTheme } from "@/providers/Theme/ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useToast } from "@/components/ui/use-toast";

export default function User() {
  const { theme } = useTheme();
  const { toast } = useToast();

  const copySocialMediaLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast({
        description: "Link copied to clipboard",
      });
    });
  };
  return (
    <>
      <div className="grid grid-cols-[1fr_auto] grid-rows-1 w-full">
        <div>
          <h3 className="text-3xl font-bold">Roman Feliz</h3>
          <div className="space-x-2">
            <span>romanf</span>
            <span>
              <Badge variant="secondary">threads.net</Badge>
            </span>
          </div>
          <p className="my-4">
            Co-founder, executive chairman and CEO of Meta Platform.
          </p>
          <div className="flex items-center justify-start space-x-3 opacity-[0.45] mt-12">
            <span>3.2 Fallowers</span>
            <GoDotFill size={10} />
            <span>Instagram</span>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-6">
          <figure className="overflow-hidden w-32 h-auto rounded-full aspect-square">
            <img
              src="/user-avatar.jpg"
              alt="user profile"
              className="block w-full h-full"
            />
          </figure>
          <div className="flex items-center justify-center gap-4">
            <span className="hover:bg-black/25 p-2 rounded-full transition-all cursor-pointer">
              <FaInstagram
                color={theme == "light" ? "black" : "white"}
                size={25}
              />
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="hover:bg-black/25 p-2 rounded-full transition-all cursor-pointer">
                  <PiDotsThreeCircleVertical
                    color={theme == "light" ? "black" : "white"}
                    size={27}
                  />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => copySocialMediaLink()}>
                  Copy Link
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <Tabs
        defaultValue="threads"
        className="w-full flex flex-col m-auto my-10"
      >
        <TabsList>
          <TabsTrigger className="flex-1" value="threads">
            Threads
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="replies">
            Replies
          </TabsTrigger>
        </TabsList>
        <TabsContent value="threads">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="replies">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
}
