export const backPath = (pathname) => {
    const backPathList = pathname.split('/')
    backPathList.pop()

    const backPathname = backPathList.join('/')

    return backPathname[0] !== '/' ? '/'+backPathname : backPathname
}