type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    projectName: string;
    projectImage: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, projectName, projectImage }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-xl font-semibold">{projectName}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>
                <div className="p-6">
                    <img src={projectImage} alt={projectName} className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Modal;
