'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-6 mt-12 border-t">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-700 text-center md:text-left flex items-center gap-2">
                    This project was created by
                    <span className="font-semibold flex items-center gap-1">
                        Guilherme Pittner
                        <img
                            src="https://flagcdn.com/16x12/at.png"
                            srcSet="https://flagcdn.com/32x24/at.png 2x,
              https://flagcdn.com/48x36/at.png 3x"
                            width="16"
                            height="12"
                            alt="Austria"
                            className="inline-block"
                        />
                        <img
                            src="https://flagcdn.com/16x12/br.png"
                            srcSet="https://flagcdn.com/32x24/br.png 2x,
              https://flagcdn.com/48x36/br.png 3x"
                            width="16"
                            height="12"
                            alt="Brazil"
                            className="inline-block"
                        />
                    </span>
                    in order to enhance my skills.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/GuilhermePittner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black transition text-2xl"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/guilherme-pittner/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    )
}
