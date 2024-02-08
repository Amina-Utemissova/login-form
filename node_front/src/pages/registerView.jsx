import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { fetchReg, selectIsReg } from "../redux/slices/reg";


const RegisterView = () => {

    const isReg = useSelector(selectIsReg)
    const dispatch = useDispatch(); 
    
      
    const {register, 
           handleSubmit, 
            formState:{errors},
            setError,
        }  = useForm({
        defaultValues: {
            email: 'ice111@gmail.com',
            fullName: 'ice',
            password: 'ice'
        },
        mode: 'onChange',

    });

    const onSubmit = (values) => {
        dispatch(fetchReg(values));
        if(!isReg){
            setError("email",{
                type: "server",
                message: "The user with this E-mail address already exists"
            })
        }
        
    }

    if (isReg) {
        return <Navigate to="/" />;
    }


    return (
        <div className="page-wrapper">
            <div className="page-content-wrapper">
            <div className="container px-0 align-items-center d-flex flex-fill max">
                <div className="login">
                    <div className="row g-0">
                <div className="col-md-6">
                    <div className="login-body">
                    <div className="text-center mb-5">
                    <Link to="/">
                        <img className="login-logo" src="https://prosklad.kz/assets/main/img/logo/prosklad-logo.svg" alt="login-logo" />
                    </Link>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center mb-5 login-text">Create an account now</h1>
            <div className="row mb-3">
                <div className="col-sm-10">
                    <TextField
            className="form-control"
            label="E-Mail"
            error ={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            fullWidth
            type="email"
            placeholder="example@email.com"
            {...register('email', {required: 'Enter Email'})}
             />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-10">

                <TextField className="form-control"  
                           type="text"
                           label="Full Name" 
                           fullWidth {...register('fullName')}
                           />

                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-10">

                <TextField className="form-control"  
                           type="password"
                           error={Boolean(errors.password?.message)}
                           helperText={errors.password?.message} 
                           label="Password" 
                           fullWidth {...register('password', {required: 'Enter password'})}
                           />

                </div>
            </div>
            
            <div>
            <button type="submit" className="btn btn-primary btn-lg">Sign up</button>
            </div>
            <div className="border-top mt-3 pt-3 text-center reg-text fw-bolder">
                <span>Already have an account?</span>
                <Link className="d-block d-lg-inline text-decoration-none" to="/auth/login"> Log in</Link>
            </div>
                    </form>
                    </div>
                        
                </div>
                <div className="col-md-6 login-img d-md-block"></div>
            </div>
                </div>
        </div>
            </div>
        </div>
    )
}

export default RegisterView