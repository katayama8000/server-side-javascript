import puppeteer from 'puppeteer';

export const writeToScrapbox = async (sid: string, project: string, pageName: string, text: string) => {
    const url = new URL(`https://scrapbox.io/${project}/${encodeURIComponent(pageName)}?body=${encodeURIComponent(text)}`);
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    await page.setCookie({ name: 'connect.sid', value: sid, domain: 'scrapbox.io' });
    await page.goto(url.toString());

    // await page.waitFor('#editor');
    await sleep(1000);
    await page.click('#editor');
    await sleep(1000);

    await browser.close();
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const project = 'katayama8000';
const sid = 'your-sid';
const pageName = 'test-title';
const text = 'test-text\n[test]\n[test2]\n[test3]';

const main = async () => {
    await writeToScrapbox(sid, project, pageName, text)
}

main().catch(console.error);
    