import Link from "next/link";
import Text from "../../../../Elementes/Text/Text";

const EditProfileButton = () => {
    return (
        <>
            <Link href="/profile/edit" className="edit-profile-btn">
                <Text content="Edit profile" />
            </Link>
        </>
    );
}

export default EditProfileButton;