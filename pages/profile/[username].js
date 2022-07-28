import {useRouter} from 'next/router'

export const Profile = () => {
    const router = useRouter();
    const {username} = router.query;
    return (
    <div>Hello {username}</div>
  )
}

