const { mdToPdf } = require('md-to-pdf');
const fs = require('fs');
const path = require('path');

function cleanMarkdown(content) {
    // Remove the #file: markers and trim
    return content.replace(/^#file:.*$/gm, '').trim();
}

async function convert() {
    console.log("Starting conversion...");

    // Combine Java assignments
    const javaA = cleanMarkdown(fs.readFileSync('java/group-a.md', 'utf-8'));
    const javaB = cleanMarkdown(fs.readFileSync('java/group-b.md', 'utf-8'));
    // Page break before Group B header
    const javaCombined = javaA + '\n\n<div class="page-break"></div>\n\n' + javaB;

    const config = {
        stylesheet: ['latex_style.css'],
        pdf_options: {
            format: 'A4',
            margin: '20mm',
            printBackground: true
        },
        basedir: __dirname
    };

    console.log("Converting Java...");
    await mdToPdf({ content: javaCombined }, { dest: 'java-experiments.pdf', ...config }).catch(console.error);

    console.log("Converting ADSA...");
    let adsaContent = cleanMarkdown(fs.readFileSync('adsa/experiments.md', 'utf-8'));
    await mdToPdf({ content: adsaContent }, { dest: 'adsa-experiments.pdf', ...config }).catch(console.error);

    console.log("Converting CNL (this has images)...");
    let cnlContent = cleanMarkdown(fs.readFileSync('cnl/experiments.md', 'utf-8'));
    cnlContent = cnlContent.replace(/\.\.\/images/g, 'images');

    await mdToPdf({ content: cnlContent }, { dest: 'cnl-experiments.pdf', ...config }).catch(console.error);

    console.log("Done!");
}

convert();
