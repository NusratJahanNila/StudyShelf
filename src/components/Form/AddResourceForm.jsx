"use client";

import { useState } from 'react';
import { PlusCircle, Upload, X, Tag, BookOpen, User, FileText, Globe, Layers, Award } from 'lucide-react';
import Swal from 'sweetalert2';
import Image from 'next/image';

const AddResourceForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        shortDescription: '',
        fullDescription: '',
        category: '',
        level: 'Beginner',
        format: 'PDF',
        language: 'English',
        pages: '',
        author: 'StudyShelf Team',
        price: 'Free',
        image: '',
        tags: [],
    });

    const [tagInput, setTagInput] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const categories = [
        'Programming', 'Computer Science', 'System Design', 'Web Design',
        'Tools', 'Career', 'Database', 'Backend', 'Productivity', 'Frontend',
        'Mobile Development', 'DevOps', 'AI/ML', 'Cybersecurity'
    ];

    const levels = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];
    const formats = ['PDF', 'Video', 'Interactive', 'Cheat Sheet', 'Template', 'E-book'];
    const languages = ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddTag = () => {
        if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, tagInput.trim()]
            }));
            setTagInput('');
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData(prev => ({
                    ...prev,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Show success message with SweetAlert
        Swal.fire({
            title: 'Success!',
            text: 'Resource added successfully to StudyShelf!',
            icon: 'success',
            confirmButtonColor: '#0A5C36',
            confirmButtonText: 'Great!',
            customClass: {
                popup: 'rounded-2xl',
                confirmButton: 'rounded-tl-xl rounded-br-xl px-6 py-3'
            }
        });

        // Reset form
        setFormData({
            title: '',
            shortDescription: '',
            fullDescription: '',
            category: '',
            level: 'Beginner',
            format: 'PDF',
            language: 'English',
            pages: '',
            author: 'StudyShelf Team',
            price: 'Free',
            image: '',
            tags: [],
        });
        setImagePreview('');
        setTagInput('');
        setIsSubmitting(false);
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center mb-4">
                    <div className=" p-3 rounded-xl mr-4">
                        <PlusCircle className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Add New Resource</h1>
                        <p className="text-gray-600">Create a new study resource for the library</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Main Form Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <span className="flex items-center">
                                        <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
                                        Resource Title
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="e.g., React Fundamentals Guide"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            {/* Short Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Short Description
                                </label>
                                <textarea
                                    name="shortDescription"
                                    value={formData.shortDescription}
                                    onChange={handleInputChange}
                                    placeholder="Brief summary of the resource (appears on cards)"
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            {/* Full Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Description
                                </label>
                                <textarea
                                    name="fullDescription"
                                    value={formData.fullDescription}
                                    onChange={handleInputChange}
                                    placeholder="Detailed description of what learners will get"
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            {/* Tags */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <span className="flex items-center">
                                        <Tag className="h-4 w-4 mr-2 text-gray-400" />
                                        Tags
                                    </span>
                                </label>
                                <div className="flex gap-2 mb-2">
                                    <input
                                        type="text"
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                                        placeholder="Add a tag and press Enter"
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddTag}
                                        className="px-4 py-3 bg-[#0A5C36] text-white rounded-tl-xl rounded-br-xl hover:bg-[#0a7c46] transition-colors"
                                    >
                                        Add
                                    </button>
                                </div>

                                {/* Tags Display */}
                                <div className="flex flex-wrap gap-2">
                                    {formData.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center px-3 py-1.5 bg-[#0A5C36]/10 text-[#0A5C36] rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveTag(tag)}
                                                className="ml-2 hover:text-red-600"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Resource Image
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-[#ff7400] transition-colors">
                                    {imagePreview ? (
                                        <div className="relative">
                                            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                                                <Image
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className="object-cover"
                                                    onError={(e) => {
                                                        // Fallback if image fails to load
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.innerHTML = `
                <div class="w-full h-48 bg-linear-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div class="text-gray-400">
                    <div class="text-4xl mb-2">📚</div>
                    <div class="text-sm">Image Preview</div>
                  </div>
                </div>
              `;
                                                    }}
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setImagePreview('');
                                                    setFormData(prev => ({ ...prev, image: '' }));
                                                }}
                                                className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="py-8">
                                            <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                                                <Upload className="h-8 w-8 text-gray-400" />
                                            </div>
                                            <p className="text-gray-600 mb-2">Upload an image</p>
                                            <p className="text-gray-500 text-sm mb-4">PNG, JPG, GIF up to 5MB</p>
                                            <label className="inline-block px-6 py-3 bg-[#0A5C36] text-white rounded-tl-xl rounded-br-xl hover:bg-[#0a7c46] transition-colors cursor-pointer">
                                                Choose File
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    className="hidden"
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Category & Level */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Category
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all appearance-none bg-white"
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <span className="flex items-center">
                                            <Layers className="h-4 w-4 mr-2 text-gray-400" />
                                            Level
                                        </span>
                                    </label>
                                    <select
                                        name="level"
                                        value={formData.level}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all"
                                    >
                                        {levels.map(level => (
                                            <option key={level} value={level}>{level}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Format & Language */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <span className="flex items-center">
                                            <FileText className="h-4 w-4 mr-2 text-gray-400" />
                                            Format
                                        </span>
                                    </label>
                                    <select
                                        name="format"
                                        value={formData.format}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all"
                                    >
                                        {formats.map(format => (
                                            <option key={format} value={format}>{format}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <span className="flex items-center">
                                            <Globe className="h-4 w-4 mr-2 text-gray-400" />
                                            Language
                                        </span>
                                    </label>
                                    <select
                                        name="language"
                                        value={formData.language}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all"
                                    >
                                        {languages.map(lang => (
                                            <option key={lang} value={lang}>{lang}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Author & Pages */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <span className="flex items-center">
                                            <User className="h-4 w-4 mr-2 text-gray-400" />
                                            Author
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="author"
                                        value={formData.author}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Pages / Duration
                                    </label>
                                    <input
                                        type="number"
                                        name="pages"
                                        value={formData.pages}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 30"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Price
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    <label className={`flex items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${formData.price === 'Free' ? 'border-[#0A5C36] bg-[#0A5C36]/5' : 'border-gray-300 hover:border-gray-400'}`}>
                                        <input
                                            type="radio"
                                            name="price"
                                            value="Free"
                                            checked={formData.price === 'Free'}
                                            onChange={handleInputChange}
                                            className="mr-2"
                                        />
                                        <span className="font-medium">Free</span>
                                    </label>
                                    <label className={`flex items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${formData.price !== 'Free' ? 'border-[#0A5C36] bg-[#0A5C36]/5' : 'border-gray-300 hover:border-gray-400'}`}>
                                        <input
                                            type="radio"
                                            name="price"
                                            value="Paid"
                                            checked={formData.price !== 'Free'}
                                            onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.checked ? '$9.99' : 'Free' }))}
                                            className="mr-2"
                                        />
                                        <span className="font-medium">Paid</span>
                                    </label>
                                </div>

                                {formData.price !== 'Free' && (
                                    <div className="mt-4">
                                        <input
                                            type="text"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            placeholder="e.g., $9.99"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7400] focus:border-transparent transition-all"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex items-center justify-center bg-linear-to-r from-[#ff7400] to-orange-500 text-white py-4 px-6 rounded-tl-xl rounded-br-xl hover:shadow-xl transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Adding Resource...
                                </>
                            ) : (
                                <>
                                    <PlusCircle className="h-5 w-5 mr-2" />
                                    Add Resource to StudyShelf
                                </>
                            )}
                        </button>

                        <p className="text-center text-gray-500 text-sm mt-4">
                            Note: This is a demo. No actual data will be stored.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddResourceForm;