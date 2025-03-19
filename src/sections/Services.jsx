 import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section className="padding-y px-10 max-container flex justify-center flex-col flex-wrap gap-9 sm:flex-row">
      {services.map((service)=>(
        <ServiceCard key={service.label} 
        {...service}
        />
      ))}
    </section>
  )
}

export default Services
