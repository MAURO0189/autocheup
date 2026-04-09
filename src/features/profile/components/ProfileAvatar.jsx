import { Camera } from "lucide-react";

/**
 * Avatar circular con botón de edición.
 * Acepta preview base64 o muestra iniciales como fallback.
 */
const ProfileAvatar = ({ initials, preview, onChange }) => (
  <div className="relative w-24 h-24 shrink-0">
    <div
      className="w-24 h-24 rounded-2xl bg-lime-500 flex items-center justify-center
      text-white text-3xl font-bold overflow-hidden shadow-lg select-none"
    >
      {preview ? (
        <img
          src={preview}
          alt="avatar"
          className="w-full h-full object-cover"
        />
      ) : (
        initials
      )}
    </div>
    <label
      htmlFor="avatar-input"
      className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg flex items-center
        justify-center cursor-pointer shadow hover:bg-lime-50 transition border border-gray-100"
      title="Cambiar foto"
    >
      <Camera className="w-4 h-4 text-cyan-950" />
    </label>
    <input
      id="avatar-input"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={onChange}
    />
  </div>
);

export default ProfileAvatar;
