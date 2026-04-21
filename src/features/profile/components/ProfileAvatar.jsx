import { Camera, Loader2 } from "lucide-react";

const ProfileAvatar = ({
  initials,
  preview,
  onChange,
  uploading = false,
  error = null,
}) => (
  <div className="flex flex-col items-center gap-2">
    <div className="relative w-24 h-24 shrink-0">
      <div
        className="w-24 h-24 rounded-2xl bg-lime-500 flex items-center justify-center
        text-white text-3xl font-bold overflow-hidden shadow-lg select-none"
      >
        {preview ? (
          <img
            src={preview}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
            // Fallback a iniciales si la URL del servidor falla (ej: aún no tiene avatar)
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          initials
        )}
      </div>

      <label
        htmlFor="avatar-input"
        className={`absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg flex items-center
          justify-center shadow border border-gray-100 transition
          ${
            uploading
              ? "cursor-not-allowed opacity-60"
              : "cursor-pointer hover:bg-lime-50"
          }`}
        title="Cambiar foto"
      >
        {uploading ? (
          <Loader2 className="w-4 h-4 text-cyan-950 animate-spin" />
        ) : (
          <Camera className="w-4 h-4 text-cyan-950" />
        )}
      </label>

      <input
        id="avatar-input"
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={onChange}
        disabled={uploading}
      />
    </div>

    {/* Feedback inline bajo el avatar */}
    {error && (
      <p className="text-xs text-red-500 text-center max-w-[140px]">{error}</p>
    )}
    {!error && uploading && (
      <p className="text-xs text-gray-400 text-center">Subiendo...</p>
    )}
  </div>
);

export default ProfileAvatar;
