import Layout from '../../components/Layout.js'
import ProjectManagementTop from '../../components/services/projectManagement/ProjectManagementTop.js'
import ProjectManagementProgramming from '../../components/services/projectManagement/ProjectManagementProgramming.js'
import ProjectManagementCarousel from '../../components/services/projectManagement/ProjectManagementCarousel.js'
import ProjectManagementConsultant from '../../components/services/projectManagement/ProjectManagementConsultant.js'
import LatestProcesses from '../../components/LatestProcesses.js'
import FAQ from '../../components/FAQ.js'


export default function projectManagement () {
    return (
        <Layout>
            <ProjectManagementTop/>
            <ProjectManagementProgramming/>
            <LatestProcesses/>
            <ProjectManagementCarousel/>
            <ProjectManagementConsultant/>
            <FAQ/>
        </Layout>
    )
}