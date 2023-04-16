import React, { useEffect, useState } from 'react'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Footer, Navbar, Sidebar, ThemeSettings } from '../Components';
import { useStateContext } from '../contexts/ContextProvider';
import { BsCurrencyDollar } from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import { getAllUsers } from '../api/index.js';
import { GoPrimitiveDot } from 'react-icons/go';
import './Ecommerce.css';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
// import {  } from '../Components';
import { Stacked, Pie, LineChart, SparkLine, Button } from '../Components';
import product9 from '../data/product9.jpg';
let count = 0;
const DropDown = ({ currentMode }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
);
const Ecommerce = () => {
    const [users, setUsers] = useState([]);
    // const { currentColor, currentMode } = useStateContext();
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
    const getAllUsersFunction = async () => {
        // const data = {};
        const allusers = await getAllUsers();
        console.log(allusers)
        setUsers(allusers.data.data)
    }
    useEffect(() => {
        getAllUsersFunction();
    }, [])
    return (
        <div >
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipComponent
                        content="Settings"
                        position="Top"
                    >
                        <button
                            type="button"
                            onClick={() => setThemeSettings(true)}
                            style={{ background: currentColor, borderRadius: '50%' }}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            <FiSettings />
                        </button>

                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar />
                    </div>

                    <div>
                        {themeSettings && (<ThemeSettings />)}

                        <div className="mt-5">
                            <div className="flex flex-wrap lg:flex-nowrap justify-center ">

                                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                                    {earningData.map((item) => (
                                        <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                                            <button
                                                type="button"
                                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                                            >
                                                {item.icon}
                                            </button>
                                            <p className="mt-3">
                                                <span className="text-lg font-semibold">{item.amount}</span>
                                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                                    {item.percentage}
                                                </span>
                                            </p>
                                            <p className="text-sm text-gray-400  mt-1">{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                                    <div className="flex justify-between">
                                        <p className="text-xl font-semibold">User Leaderboard</p>
                                        <button type="button" className="text-xl font-semibold text-gray-500">
                                            <IoIosMore />
                                        </button>
                                    </div>

                                    <div className="mt-10 ">
                                        {weeklyStats.map((item) => (
                                            <div key={item.title} className="flex justify-between mt-4 w-full">
                                                <div className="flex gap-4">
                                                    <button
                                                        type="button"
                                                        style={{ background: item.iconBg }}
                                                        className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                                                    >
                                                        {item.icon}
                                                    </button>
                                                    <div>
                                                        <p className="text-md font-semibold">{item.title}</p>
                                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                                    </div>
                                                </div>

                                                <p className={`text-${item.pcColor}`}>{item.amount}</p>
                                            </div>
                                        ))}
                                        <div className="mt-4">
                                            <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* // */}
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr className='rowIncrement'>
                                    <th className='tHeadTable'>S.No.</th>
                                    <th className='tHeadTable'>Email</th>
                                    <th className='tHeadTable'>Unique ID</th>
                                    <th className='tHeadTable'>Level Progress</th>
                                    <th className='tHeadTable'>Soft skill</th>
                                </tr>
                            </thead>
                            <tbody className='tBody'>
                                {
                                    users && users.map((user, index) => (
                                        <tr>
                                            <td className='tHeadTable'>{index + 1}</td>
                                            <td className='tHeadTable'>{user.email} </td>
                                            <td className='tHeadTable'>{user.uniqueId ? user.uniqueId : `45454${index}`}</td>
                                            <td className='tHeadTable'>{user.level ? user.level : '5'}</td>
                                            <td className='tHeadTable'>{user.level >= 4 ? "User has soft skills" : 'User does not have soft skills'}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>

                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default Ecommerce