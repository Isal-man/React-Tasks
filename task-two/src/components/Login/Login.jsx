import KotakTeks from "../KotakTeks/KotakTeks";
import Tombol from "../Tombol/Tombol";

const Login = () => {
    return (
        <div className="login-page">
            <KotakTeks type="email" name="email" id="email" />
            <KotakTeks type="password" name="password" id="password" />
            <Tombol title="LOGIN" />
        </div>
    );
};

export default Login;
