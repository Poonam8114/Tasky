import React,{useEffect, useState }from 'react'
import { useSelector } from "react-redux"
import DashboardLayout from "../../components/DashboardLayout"
import axiosInstance from "../../utils/axioInstance"
import moment from "moment"
const Dashboard = () => {
    const { currentUser } = useSelector((state) => state.user)
     const [dashboardData, setDashboardData] = useState([])
     const [pieChartData, setPieChartData] = useState([])
       const [barChartData, setBarChartData] = useState([])




       const getDashboardData = async () => {
    try {
      const response = await axiosInstance.get("/tasks/dashboard-data")

      if (response.data) {
        setDashboardData(response.data)
        prepareChartData(response.data?.charts || null)
      }
    } catch (error) {
      console.log("Error fetching dashboard data: ", error)
    }
  }

   useEffect(() => {
      getDashboardData()
  
      return () => {}
    }, [])
  
  return (
  
<DashboardLayout activeMenu={"Dashboard"}>

<div className="p-6 space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Welcome! {currentUser?.name}
              </h2>

              <p className="text-blue-100 mt-1">
                {moment().format("dddd Do MMMM YYYY")}
              </p>
            </div>
</div>
</div>
</div>


</DashboardLayout>
  
  )
}

export default Dashboard