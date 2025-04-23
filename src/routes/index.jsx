import { MatchDetails } from "../components/MatchDetails";
import { MatchList } from "../components/MatchList";
import mainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";

const routes = [
    { path: '/', component: Home, layout: mainLayout },
    { path: '/match/:id', component: MatchDetails, layout: mainLayout },
];

export default routes;