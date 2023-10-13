import Layout from "../../components/Layout";
import DomoticaCarousel from "../../components/services/domoticaHome/DomoticaCarousel";
import DomoticaConsultant from "../../components/services/domoticaHome/DomoticaConsultant";
import DomoticaProgramming from "../../components/services/domoticaHome/DomoticaProgramming";
import DomoticaTop from "../../components/services/domoticaHome/DomoticaTop";
import LatestProcesses from "../../components/LatestProcesses";
import FAQ from "../../components/FAQ";


export default function DomoticaHome () {
    return (
        <Layout>
            <DomoticaTop/>
            <DomoticaProgramming/>
            <LatestProcesses/>
            <DomoticaCarousel/>
            <DomoticaConsultant />
            <FAQ/>
        </Layout>
    )
}