import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    template: `
        <section>
            <ol>
                @for(fact of facts(); track fact) {
                    <li>{{fact}}</li>  
                } @empty {
                    <li>No facts are available</li>
                }
            </ol>
        </section>
    `,
    styles: '',
})
export class AppComponent {
    title = 'ssr-xp';
    facts = signal<string[]>([]);

    constructor() {
        fetch('/api/facts').then(response => response.json()).then(facts => {
        this.facts.set(facts);
        });
    }
}