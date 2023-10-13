import Layout from "../../components/Layout"
import MechanicalAssemblyTop from '../../components/services/mechanicalAssembly/MechanicalAssemblyTop'
import MechanicalAssemblyProgramming from '../../components/services/mechanicalAssembly/MEchanicalAssemblyProgramming'
import LatestProcesses from "../../components/LatestProcesses"
import MechanicalAssemblyCarousel from '../../components/services/mechanicalAssembly/MechanicalAssemblyCarousel'
import MechanicalAssemblyConsultant from '../../components/services/mechanicalAssembly/MechanicalAssemblyConsultant'
import FAQ from '../../components/FAQ.js'


export default function MechanicalAssembly () {
    return (
        <Layout>
            <MechanicalAssemblyTop/>
            <MechanicalAssemblyProgramming/>
            <LatestProcesses/>
            <MechanicalAssemblyCarousel/>
            <MechanicalAssemblyConsultant/>
            <FAQ/>
        </Layout>
    )
}