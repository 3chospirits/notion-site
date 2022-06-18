import * as React from 'react'
import { useTheme } from 'next-themes'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    },
    [resolvedTheme, setTheme]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2022 {config.author}</div>
      <a
        href='//www.dmca.com/Protection/Status.aspx?ID=84192737-239e-4ee1-b285-f4c74f560c3f'
        title='DMCA.com Protection Status'
        className='dmca-badge'
      >
        <img
          src='https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=84192737-239e-4ee1-b285-f4c74f560c3f'
          alt='DMCA.com Protection Status'
        />
      </a>
      <script src='https://images.dmca.com/Badges/DMCABadgeHelper.min.js'></script>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {resolvedTheme === 'dark' ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}

        {config.discord && (
          <a
            className={styles.discord}
            href={`https://www.discord.gg/${config.discord}`}
            title={`Discord ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaDiscord />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
