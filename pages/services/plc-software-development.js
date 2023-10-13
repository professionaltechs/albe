import Layout from '../../components/Layout.js'
import PlcTop from '../../components/services/plcSoftware/PlcTop.js'
import PlcProgramming from '../../components/services/plcSoftware/PlcProgramming.js'
import LatestProcesses from '../../components/LatestProcesses.js'
import Consultant from '../../components/services/plcSoftware/Consultant.js'
import Carousel from '../../components/services/plcSoftware/Carousel.js'
import FAQ from '../../components/FAQ.js'

export default function PlcSoftwareDevelopment() {
    return (
        <Layout>
            <PlcTop />
            <PlcProgramming />
            <LatestProcesses />
            <Consultant />
            <Carousel/>
            <FAQ/>
        </Layout>
    )
}