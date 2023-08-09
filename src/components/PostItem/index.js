import {useState, useEffect} from 'react';
import {
    Heart,
    Send,
    Bookmark,
    MessageCircle,
    ChevronRightCircle,
    ChevronLeftCircle,
    MoreHorizontal
} from 'lucide-react';


export const PostItem = () => {

    let [user, setUser] = useState({
        nickname: "whoami",
        profileImg: "https://picsum.photos/400/300",
        follow: ["whoami",],//null
        savedPost: [1],//null
    });

    let [post, setPost] = useState({
        id: 1,
        nickname: "not_you",
        photo: "https://picsum.photos/400/300",
        location: "seoul",//null
        date: "2023-08-01",
        likes: ["idonotknow", "whoami", "you"],//null
        comments: [{nickname: "haha", content: "hello", date: "Fri Aug 03 2023"},
            {nickname: "hoho", content: "world", date: "Fri Aug 04 2023"}],//null
        description: "hello #방가방가 world! #가방가방",//null
        tags: [],//null
    });

    // onMount
    useEffect(()=>{
        const hashtags = post.description.match(/#[^\s#]+/g);
        // 해시태그를 다른 색상의 span으로 교체
        let newDescription = post.description;
        hashtags?.forEach(tag => {
            newDescription = newDescription.replace(tag, `<span class='text-blue-800'>${tag}</span>`);
        });

        setPost((prevState) => ({
            ...prevState,
            tags : hashtags,
            description : newDescription,
        }));
        // console.log(post);
    },[]);

    const toggleLike = () => {
        post.likes.includes(user.nickname) ?
            post.likes.splice(post.likes.indexOf(user.nickname), 1)
            :
            post.likes.push(user.nickname);
        setIsLiked(post.likes.includes(user.nickname));
        // console.log(post.likes);
    }

    const toggleFollow = () => {
        if (post.nickname === user.nickname) return;
        user.follow.includes(post.nickname) ?
            user.follow.splice(user.follow.indexOf(post.nickname), 1)
            :
            user.follow.push(post.nickname);
        setIsFollowed(user.follow.includes(post.nickname));
        // console.log(user.follow);
    }

    const toggleSave = () => {
        user.savedPost.includes(post.id) ?
            user.savedPost.splice(user.savedPost.indexOf(post.id), 1)
            :
            user.savedPost.push(post.id);
        setIsSaved(user.savedPost.includes(post.id));
    }

    const [formData, setFormData] = useState({
        nickname: user.nickname,
        content: '',
        date: new Date().toDateString(),
    });

    // Form 필드들의 값이 변경될 때 호출되는 함수
    const handleFormChange = (e) => {
        const {name, value} = e.target;
        // console.log(name, value);
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Form이 제출될 때 호출되는 함수
    const handleSubmit = (e) => {
        e.preventDefault();
        // 댓글 배열에 새 댓글 추가
        post.comments.push({
            nickname: formData.nickname,
            content: formData.comment,
            date: formData.date,
        });

        // Form 데이터 초기화
        setFormData((prevState) => ({
            ...prevState,
            comment: '',
        }));
        // console.log(post.comments);
    };

    let [settingModal, setSettingModal] = useState(false);
    let [isFollowed, setIsFollowed] = useState(user.follow.includes(post.nickname));
    let [isLiked, setIsLiked] = useState(post.likes.includes(user.nickname));
    let [isSaved, setIsSaved] = useState(user.savedPost.includes(post.id));

    return (
        <div className="h-full m-4 p-4 bg-white flex-col space-y-2">
            {/* user header*/}
            <div className="flex space-x-4 justify-start items-center relative  h-1/6">
                <div className="rounded-full border-2 border-gray-200 aspect-square h-full">
                    <img className="w-12 h-12 rounded-full" src="https://picsum.photos/200/300" alt="profile"/>
                </div>
                <div className="flex-col h-full">
                    {/*todo username누르면 프로필 페이지로 이동*/}
                    <h3 className="text-2xl font-bold">{post.nickname}</h3>
                    <h4 className="text-lg">{post.location}</h4>
                </div>
                {/*본인 포스트일 경우 follow/unfollow버튼 표시 안함*/}
                {
                    post.nickname === user.nickname ?
                        null
                        :
                        <button className="text-blue-500 h-full border-blue-500 border p-2 rounded-xl"
                                onClick={toggleFollow}>
                            {
                                isFollowed ? 'unfollow' : 'follow'
                            }
                        </button>
                }


                <button className="absolute right-0 h-full"
                        onClick={() => {
                            setSettingModal(!settingModal)
                        }}
                ><MoreHorizontal/></button>
            </div>

            {
                settingModal ?
                    <div className="w-screen h-screen fixed top-0 left-0 bg-black/50 z-50 "
                         onClick={() => {
                             setSettingModal(false)
                         }}
                    >
                        <Modal/>
                    </div>
                    : null
            }

            {   /*    photo*/}
            <div className="aspect-square relative">
                <img className="w-full h-full " src="https://picsum.photos/400/300" alt="profile"/>
                {/*<div className="absolute bottom-1/2 left-2"> <ChevronLeftCircle fill="white" stroke="gray" className="opacity-60"/> </div>*/}
                {/*<div className="absolute bottom-1/2 right-2 "> <ChevronRightCircle fill="white" stroke="gray" className="opacity-60"/></div>*/}
                {/*<div className="absolute bottom-2 translate-x-1/2 right-4 w-full "><MoreHorizontal size={30} stroke="white" className="opacity-60"/> </div>*/}
            </div>

            {/*    post details*/}
            {/*    actions*/}
            <div className="flex space-x-2 relative">
                <button onClick={toggleLike}>
                    {
                        isLiked ? <Heart fill="fill-black"/> : <Heart/>
                    }
                </button>
                {/*todo comment누르면 전체화면에 포스트가. */}
                <button><MessageCircle className="scale-[-1] rotate-90"/></button>
                <button><Send className="relative  rotate-12 "/></button>
                <button className="absolute right-0"
                        onClick={toggleSave}>
                    {
                        isSaved ? <Bookmark fill="fill-black"/> : <Bookmark/>
                    }
                </button>
            </div>

            {/*    likes*/}
            <div className="text-lg font-bold">
                {/*todo isLiked로 likes증/감*/}
                <h4>likes {post.likes.length}개</h4>
            </div>

            {/*  description*/}
            <div className="text-lg">
                <div className="font-bold inline-block pr-2">{post.nickname}</div>
                <span dangerouslySetInnerHTML={{ __html: post.description }}></span>
                {/*<div className="text-blue-800">{post.tags.join(',')}</div>*/}
                {/*    todo: 높이 지정, 텍스트가 높이 넘으면 더보기 표시*/}
            </div>

            {/*comments*/}
            <div className="text-lg">
                {/*todo 모두 보기 누르면 전체화면에 포스트가. */}
                <div className="text-lg text-gray-400 my-2">댓글 {post.comments.length}개 모두보기</div>
                {
                    // 댓글 3개 까지만 보여줌.
                    post.comments.slice(0, 3).map(function (a, i) {
                        return (
                            <div className="flex space-x-2 relative" key={i}>
                                <div className="font-bold inline-block pr-2">{a.nickname}</div>
                                <span>{a.content}</span>
                                <span className="absolute right-0 text-gray-300">{a.date}</span>
                            </div>
                        )
                    })
                }
            </div>

            {/*add comments*/}
            <form className="text-lg w-full relative" onSubmit={handleSubmit}>
                <input className="text-gray-400 w-[calc(100%-60px)] p-2" placeholder="댓글 달기..."
                       type="text"
                       name="comment"
                       value={formData.comment}
                       onChange={handleFormChange}
                ></input>
                <button type="submit" className="absolute right-0 top-1 border-blue-500 border px-2 py-1 rounded-xl">
                    <span className="text-blue-500 h-full text-center">게시</span>
                </button>
            </form>

            {/*date*/}
            <div className="text-lg text-gray-400">{post.date}</div>
        </div>
    )
}

function Modal() {
    return (
        <div className="absolute top-1/4 left-1/2 w-1/6 bg-white
        rounded-2xl flex-col space-y-3 divnicknamee-gray-300 p-4">
            <div className="text-red-500 font-bold w-full text-center text-xl border-b">신고</div>
            <div className="text-red-500 font-bold w-full text-center text-xl border-b">팔로우 취소</div>
            <div className=" font-bold w-full text-center text-xl border-b">즐겨찾기에 추가</div>
            <div className=" font-bold w-full text-center text-xl border-b">게시물로 이동</div>
            <div className=" font-bold w-full text-center text-xl border-b">공유 대상...</div>
            <div className=" font-bold w-full text-center text-xl border-b">링크 복사</div>
            <div className=" font-bold w-full text-center text-xl border-b">퍼가기</div>
            <div className=" font-bold w-full text-center text-xl border-b">이 계정 정보</div>
            <div className=" font-bold w-full text-center text-xl ">취소</div>
        </div>
    )
}

export default PostItem;