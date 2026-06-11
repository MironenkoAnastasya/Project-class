import useAuth from "../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Profile</h1>
            
        </div>
    );
}

export default Profile;
