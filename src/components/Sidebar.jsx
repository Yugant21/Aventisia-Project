import React from 'react';
import Logo from '../assets/Logo.png';
import sideArrow from '../assets/SideArrow.png';
import vector from '../assets/Vector.png';
import grid from '../assets/grid.png';
import layer from '../assets/layers-round.png';
import task from '../assets/task.png';
import setting from '../assets/setting.png';
import teacher from '../assets/teacher.png';

const Sidebar = () => {
    return (
        <div className="col-span-3 bg-white shadow-md">
            {/* Logo and Toggle */}
            <div className="bg-slate-50 flex items-center justify-between h-[92px] ps-8">
                <img className="w-[190px] h-[60px]" src={Logo} alt="Logo" />
                <img className="w-[14px] h-[35px] cursor-pointer" src={sideArrow} alt="Toggle Sidebar" />
            </div>

            {/* Navigation Menu */}
            <div className="pt-6">
                <ul className="space-y-6 px-6">
                    {/* Section 1 */}
                    <li>
                        <h4 className="text-gray-700 font-semibold mb-2">Model Library</h4>
                        <div className="bg-[#1E1B4B] text-white flex items-center py-2 px-4 rounded-lg cursor-pointer">
                            <img className="w-[15px] h-[15px] mr-3" src={vector} alt="Vector" />
                            <span>Model Library</span>
                        </div>
                    </li>

                    {/* Section 2 */}
                    <li>
                        <h4 className="text-gray-700 font-semibold mb-2">Extraction Builder</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-600 hover:text-blue-700 hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">
                                <img className="w-[15px] h-[15px] mr-3" src={grid} alt="Grid" />
                                <span>Label Data</span>
                            </li>
                            <li className="flex items-center text-gray-600 hover:text-blue-700 hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">
                                <img className="w-[15px] h-[15px] mr-3" src={layer} alt="Layer" />
                                <span>Model</span>
                            </li>
                            <li className="flex items-center text-gray-600 hover:text-blue-700 hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">
                                <img className="w-[15px] h-[15px] mr-3" src={task} alt="Task" />
                                <span>Test</span>
                            </li>
                        </ul>
                    </li>

                    {/* Section 3 */}
                    <li>
                        <h4 className="text-gray-700 font-semibold mb-2">Help</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-600 hover:text-blue-700 hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">
                                <img className="w-[15px] h-[15px] mr-3" src={setting} alt="Setting" />
                                <span>Setting</span>
                            </li>
                            <li className="flex items-center text-gray-600 hover:text-blue-700 hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer">
                                <img className="w-[15px] h-[15px] mr-3" src={teacher} alt="Support" />
                                <span>Support</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;