import Layout from "../../components/Layout"
import ElectricalAssemblyTop from '../../components/services/electricalAssembly/ElectricalAssemblyTop'
import ElectricalAssemblyProgramming from '../../components/services/electricalAssembly/ElectricalAssemblyProgramming'
import ElectricalAssemblyConsultant from '../../components/services/electricalAssembly/ElectricalAssemblyConsultant'
import ElectricalAssemblyCarousel from '../../components/services/electricalAssembly/ElectricalAssemblyCarousel'
import LatestProcesses from "../../components/LatestProcesses"
import FAQ from '../../components/FAQ.js'


export default function ElectricalAssembly (){
    return (
        <Layout>
            <ElectricalAssemblyTop/>
            <ElectricalAssemblyProgramming/>
            <LatestProcesses/>
            <ElectricalAssemblyCarousel/>
            <ElectricalAssemblyConsultant/>
            <FAQ/>
        </Layout>
    )
}