const Navigation = () => {
  return (
    <aside className="max-w-48 bg-[#1f213a]  p-4 h-screen">
        <nav className="flex flex-col items-start justify-between h-full text-slate-100">
            <button>
                Home
            </button>

            <ul className="flex flex-col">
                <li>
                    <button>
                        Theme
                    </button>
                </li>
                <li>
                    <button>
                        Stats
                    </button>
                </li>
                <li>
                    <button>
                        Profile
                    </button>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default Navigation