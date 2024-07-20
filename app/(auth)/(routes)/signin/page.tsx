"use client"
import Label from "@/components/mini-component/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";



const SignInPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const router = useRouter()
    return (
        <div className="flex justify-center items-center h-screen">

            <Card className="p-24 border">
                <Label placeholder="" onChange={(e) => setUser({
                    ...user,
                    email: e.target.value
                })} htmlFor="email" label="Email" />
                <Label placeholder="" onChange={(e) => setUser({
                    ...user,
                    password: e.target.value
                })} htmlFor="password" label="Password" type="password" />
                <Button onClick={() => {
                    signIn(
                        "credentials", {
                        email: user.email,
                        password: user.password,
                        redirect: false
                    }
                    )
                    router.push("/")
                }}>sign-in</Button>
            </Card>
        </div>
    );
}

export default SignInPage;