import Layout from '../../components/Layout.js'
import SoftwareDevelopmentTop from '../../components/services/softwareDevelopment/SoftwareDevelopmentTop.js'
import SoftwareDevelopmentProgramming from '../../components/services/softwareDevelopment/SoftwareDevelopmentProgramming.js'
import SoftwareDevelopmentCarousel from '../../components/services/softwareDevelopment/SoftwareDevelopmentCarousel.js'
import SoftwareDevelopmentConsultant from '../../components/services/softwareDevelopment/SoftwareDevelopmentConsultant.js'
import LatestProcesses from '../../components/LatestProcesses.js'
import FAQ from '../../components/FAQ.js'


export default function SoftwareDevelopment () {
    return (
        <Layout>
            <SoftwareDevelopmentTop/>
            <SoftwareDevelopmentProgramming/>
            <LatestProcesses/>
            <SoftwareDevelopmentCarousel/>
            <SoftwareDevelopmentConsultant/>
            <FAQ/>
        </Layout>
    )
}