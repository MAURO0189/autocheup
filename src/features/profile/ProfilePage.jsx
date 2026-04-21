import { useProfile } from "./hooks/useProfile";
import { useAvatar } from "./hooks/useAvatar";
import { useAuth } from "../../auth/hooks/useAuth";
import ProfileAvatar from "./components/ProfileAvatar";
import PersonalForm from "./components/PersonalForm";

const ProfilePage = () => {
  const { user } = useAuth();
  const hasPlan = user?.plan && user.plan !== "free";

  const {
    form,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
    initials,
    OCCUPATIONS,
    HOW_DID_YOU_FIND_US,
  } = useProfile();

  const {
    preview,
    uploading,
    error: avatarError,
    handleAvatarChange,
  } = useAvatar(user?.uuid);

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="bg-cyan-950 text-white py-10 px-4 md:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center sm:items-end gap-6">
          <ProfileAvatar
            initials={initials}
            preview={preview}
            onChange={handleAvatarChange}
            uploading={uploading}
            error={avatarError}
          />
          <div className="text-center sm:text-left pb-1">
            <h2 className="text-2xl font-bold tracking-wide">
              {[form.firstName, form.lastName].filter(Boolean).join(" ") ||
                "Mi perfil"}
            </h2>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-1.5 flex-wrap">
              <span className="text-xs bg-white/10 border border-white/20 text-white/70 px-3 py-1 rounded-full">
                {user?.role ?? "Usuario"}
              </span>
              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold border ${
                  hasPlan
                    ? "bg-lime-500/20 border-lime-400 text-lime-300"
                    : "bg-white/10 border-white/20 text-white/50"
                }`}
              >
                {hasPlan ? "Plan Activo" : "Plan Gratuito"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-8 max-w-2xl">
        <div className="bg-white rounded-xl border border-gray-100 shadow p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-base font-bold text-cyan-950">
              Información personal
            </h3>
            <p className="text-sm text-gray-400 mt-0.5">
              Mantén tus datos actualizados para una mejor experiencia.
            </p>
          </div>
          <PersonalForm
            form={form}
            loading={loading}
            success={success}
            error={error}
            onChange={handleChange}
            onSubmit={handleSubmit}
            OCCUPATIONS={OCCUPATIONS}
            HOW_DID_YOU_FIND_US={HOW_DID_YOU_FIND_US}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
