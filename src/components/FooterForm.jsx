const FooterForm = () => {

    return (
        <form className="grid gap-2">
            <label className="sr-only" htmlFor="footer-email">
                Email:
            </label>
            <input type="email" name="footer-email" id="footer-email" required placeholder="Enter your email"
                className="block min-w-full py-2 px-4 placeholder:text-sm"
            />
            <button className="px-6 py-2  bg-bp-yellow text-bp-lighttext uppercase">
                Subscribe
            </button>
        </form>
    )
}

export default FooterForm