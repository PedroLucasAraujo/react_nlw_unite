import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

export function AttendeeList() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">    
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="w-72 px-3 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input  className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm ring-0"type="text" placeholder="Buscar participantes..." />
        
                </div>
            </div>
            
            <div className="border border-white/10 rounded-lg">
                <table className="w-full ">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th style={{
                                width: 48
                            }} 
                            className="py-3 px-4 text-sm text-left font-semibold">
                            <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 checked:bg-orange-400"/>
                            </th>
                            <th className="py-3 px-4 text-sm text-left font-semibold">
                            Código
                            </th>
                            <th className="py-3 px-4 text-sm text-left font-semibold">
                                Participantes
                            </th>
                            <th className="py-3 px-4 text-sm text-left font-semibold">
                            Data de Inscrição
                            </th>
                            <th className="py-3 px-4 text-sm text-left font-semibold">
                            Data do check-in
                            </th>
                            <th style={{
                                width: 64
                            }} 
                            className="py-3 px-4 text-sm text-left font-semibold"></th>
                        </tr>
                    </thead>
                    <tbody>
                       {Array.from({length: 8}).map((_, i) => {
                        return ( <tr key={i}className="border-b border-white/10 hover:bg-white/5">
                        <td className="py-3 px-4 text-sm text-left text-zinc-300">
                        <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 checked:bg-orange-400"/>
                           </td>
                        <td className="py-3 px-4 text-sm text-left text-zinc-300">
                        12348
                        </td>
                        <td className="py-3 px-4 text-sm text-left text-zinc-300">
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-white">Pedro Lucas Araujo</span>
                            <span>pedrolpriv@gmail.com</span>
                        </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-left text-zinc-300">
                        7 dias atrás
                        </td>
                        <td className="py-3 px-4 text-sm text-left text-zinc-300">
                        3 dias atrás
                        </td>
                        <td>
                            <button className="bg-black/20 border border-white/10 rounded-md p-1.5"><MoreHorizontal className="size-4"/></button>
                        </td>
                    </tr>)
                       })}
                    </tbody>
                    <tfoot>
                        <td className="py-3 px-4 text-sm text-left text-zinc-300" colSpan={3}>
                            Mostrando 10 de 228 itens
                        </td>
                        <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <span>Página 1 de 23</span>

                                <div className="flex gap-1.5">
                                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5"><ChevronsLeft className="size-4"/></button>
                                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5"><ChevronLeft className="size-4"/></button>
                                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5"><ChevronRight className="size-4"/></button>
                                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5"><ChevronsRight className="size-4"/></button>
                                </div>
                            </div>
                        </td>
                    </tfoot>
                </table>
            </div>
            

        </div>
    )
}