
import { create } from 'zustand'

interface useProfile {
    loading: boolean,
    setLoading: (loading: boolean) => void;
}

const useProfile = create<useProfile>((set) => ({
    loading: false,
    setLoading: function (loading) {
        set(function () {
            return {
                loading: loading,
            }
        })
    }

}))

export default useProfile;
