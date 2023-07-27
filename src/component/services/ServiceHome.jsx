import React from 'react'
import Back from '../common/back/Back'
import ServiceCard from './ServiceCard'
import OnlineService from './OnlineService'

function ServiceHome() {
  return (
    <>
        <Back title="Services we provide"/>
        <ServiceCard/>
        <OnlineService/>
    </>
  )
}

export default ServiceHome