import React, { useState } from 'react';

const Form = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    modelName: '',
    modelType: '',
    llm: 'Neural (recommended)',
    modelDescription: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setFormData('')
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Create New Model</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 focus:outline-none">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
          {/* Model Name */}
          <div>
            <label htmlFor="modelName" className="block text-sm font-medium text-gray-700">
              Model Name
            </label>
            <input
              type="text"
              id="modelName"
              name="modelName"
              value={formData.modelName}
              onChange={handleChange}
              placeholder="Enter Model Name"
              className="w-full mt-1 px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Model Type */}
          <div>
            <label htmlFor="modelType" className="block text-sm font-medium text-gray-700">
              Model Type
            </label>
            <select
              id="modelType"
              name="modelType"
              value={formData.modelType}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select</option>
              <option value="classification">Classification</option>
              <option value="regression">Regression</option>
              <option value="clustering">Clustering</option>
            </select>
          </div>

          {/* LLM */}
          <div>
            <label htmlFor="llm" className="block text-sm font-medium text-gray-700">
              LLM
            </label>
            <select
              id="llm"
              name="llm"
              value={formData.llm}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              disabled
            >
              <option value="Neural (recommended)">Neural (recommended)</option>
              <option value="Neural (recommended)">Neural (recommended)</option>
              <option value="Neural (recommended)">Neural (recommended)</option>
            </select>
          </div>

          {/* Model Description */}
          <div>
            <label htmlFor="modelDescription" className="block text-sm font-medium text-gray-700">
              Model Description
            </label>
            <textarea
              id="modelDescription"
              name="modelDescription"
              value={formData.modelDescription}
              onChange={handleChange}
              placeholder="Enter Model Description"
              rows="3"
              className="w-full mt-1 px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex justify-evenly space-x-10 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-16 py-1 text-indigo-600 bg-indigo-100 border border-indigo-600 rounded-md shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-16 py-1 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;