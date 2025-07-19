import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = (providerName) => {
    // console.log(providerName);
    signIn(providerName);
  };

  useEffect(() => {
    if(session.status === "authenticated"){
        router.push("/");
        toast.success("Login Successful");
    }
  }, [session?.status])


  return (
    <div className='flex flex-row space-x-4'>

        <div className='p-2 hover:bg-gray-300 cursor-pointer rounded-md'
            onClick={() => handleSocialLogin("google")}
        >
            <FcGoogle size={30} />
        </div>

        <div className='p-2 hover:bg-gray-300 cursor-pointer rounded-md'
            onClick={() => handleSocialLogin("github")}
        >
            <FaGithub size={30}  />
        </div>
    </div>
  )
}

export default SocialLogin