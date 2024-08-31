import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { setUser } from "@/redux/authSlice"; 
import { Loader2 } from "lucide-react";
import Footer from "../Footer";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading,user } = useSelector((store) => store.auth);
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("email", input.email);

    formData.append("password", input.password);
    formData.append("role", input.role);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `http://localhost:8000/api/v1/user/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user))
        navigate("/");
        toast.success(res.data.message);
        setInput({email: "",
          password: "",
          role: ""
        })
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setInput({email: "",
        password: "",
        role: ""
      })
    } finally {
      dispatch(setLoading(false));
      setInput({email: "",
        password: "",
        role: ""
      })
    }
  };
  useEffect(()=>{
    if(user){
        navigate("/");
    }
},[])
  return (
    <div>
      <Navbar />
      <div className="flex sm:items-center sm:justify-center max-w-7xl mx-auto">
        <form
          className="w-full sm:w-1/2 border border-gray-200 rounded-md p-4 my-10"
          onSubmit={submitHandler}
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your Email Id"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="***********"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="w-full bg-[#6A38C2] my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full bg-blue-500 my-4">
              Login
            </Button>
          )}
          <span>
            Don't have an account ?{" "}
            <Link className="text-blue-600" to="/signup">
              SignUp
            </Link>
          </span>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
