import { Outlet } from "react-router";

const mainLayout = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default mainLayout;